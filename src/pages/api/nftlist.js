import axios from "axios";
import crypto from "crypto";
import getNFTAlchemy from "../../scripts/alchemy";
import getNFTMoralis from "../../scripts/moralis";
// import getNFTThirdweb from "../../scripts/thirdweb";

const cache = new Map();

const Pinata = {
  ApiKey: "51d7633e174674866331",
  ApiSecret: "1e86c952450046c049a99c013a5f7622b2fb0b4f94ace95d413540c8310a5d24",
  JWT: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1ZGUwZDRjOS02ZTc0LTQxMWQtOTY3MS0wOWQ0NGU1NDExYjEiLCJlbWFpbCI6InJvemJlaGFuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI1MWQ3NjMzZTE3NDY3NDg2NjMzMSIsInNjb3BlZEtleVNlY3JldCI6IjFlODZjOTUyNDUwMDQ2YzA0OWE5OWMwMTNhNWY3NjIyYjJmYjBiNGY5NGFjZTk1ZDQxMzU0MGM4MzEwYTVkMjQiLCJpYXQiOjE2ODQzMzI4MzB9.gWTuKA_ZVTO2OZk0PqNuMpM9Fc4ZRHQt0xfOVlI0IZc",
};

export async function getnft(req, res) {
  // const referer = req.headers.referer;
  // // Check if the referer matches your server's URL or origin
  // if (referer !== "http://my-server-url") {
  //   return res.status(403).json({ message: "Access Forbidden" });
  // }

  // Check if the response is already cached
  const cacheKey = generateCacheKey(req);
  if (cache.has(cacheKey)) {
    const cachedResponse = cache.get(cacheKey);
    res.status(304).json(cachedResponse);
  }

  const { cid, fileName } = req.query;

  axios
    .get(`https://gateway.pinata.cloud/ipfs/${cid}/${fileName}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${Pinata.JWT}`,
        Accept: "text/plain",
      },
    })
    .then((response) => {
      cache.set(cacheKey, response.data);
      console.log("JSON file:", response.data);
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error retrieving data from Pinata gateway" });
    });
}

async function getNFTPinata(cid, fileName) {
  var url = `https://gateway.pinata.cloud/ipfs/${cid}/${fileName}`;
  const cacheKey = generateCacheKey(url);
  if (cache.has(cacheKey)) {
    const cachedResponse = cache.get(cacheKey);
    return cachedResponse;
  }

  try {
    const response = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${Pinata.JWT}`,
        Accept: "text/plain",
      },
    });
    cache.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: "error" };
  }
}

export default async function handler(req, res) {
  try {
    const { url } = req.query;
    const { accounts } = req.query;
    const accountList = accounts.split(" ");

    const nftList = await getNFTsAccounts(accountList);

    var nftCatalog = [];

    await Promise.all(
      nftList.alchemy.map(async (item, i) => {
        for (const metadata of item.ownedNfts) {
          await new Promise(async (resolve) => {
            var cid = metadata.tokenUri.raw
              .replace("https://", "")
              .replace("ipfs://", "")
              .slice(0, -6);
            var fileName = metadata.tokenUri.raw.slice(-6);

            var nft = await getNFTPinata(cid, fileName);

            cid = nft.image
              .replace("https://", "")
              .replace("ipfs://", "")
              .slice(0, -7);
            fileName = nft.image.slice(-6).replace("json", "jpg");
            var image = `https://gateway.pinata.cloud/ipfs/${cid}/${fileName}`;

            nftCatalog.push({
              metadata: metadata,
              nft: nft,
              image: image,
              cid: cid,
            });
            resolve();
          });
        }
      })
    );

    res.status(200).json(nftCatalog);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
}

async function getNFTsAccounts(accounts) {
  var nftList = {
    alchemy: [],
    moralis: [],
    thirdweb: [],
  };

  var result = [];
  await Promise.all(
    accounts.map(async (account) => {
      await new Promise((resolve) => {
        getNFTAlchemy(account).then((tempResult) => {
          result = result.concat(tempResult);
          resolve();
        });
      });
    })
  );

  nftList.alchemy = nftList.alchemy.concat(result);

  return nftList;
}

function generateCacheKey(url) {
  const hash = crypto.createHash("md5").update(url).digest("hex");
  return hash;
}
