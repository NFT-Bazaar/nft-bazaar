import { create, urlSource } from "ipfs-http-client";
import * as IPFS from "ipfs-core";
import axios from "axios";

export function readByPinata(tokenUrl) {
  const apiKey = "51d7633e174674866331";
  const apiSecret =
    "1e86c952450046c049a99c013a5f7622b2fb0b4f94ace95d413540c8310a5d24";
  const JWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1ZGUwZDRjOS02ZTc0LTQxMWQtOTY3MS0wOWQ0NGU1NDExYjEiLCJlbWFpbCI6InJvemJlaGFuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI1MWQ3NjMzZTE3NDY3NDg2NjMzMSIsInNjb3BlZEtleVNlY3JldCI6IjFlODZjOTUyNDUwMDQ2YzA0OWE5OWMwMTNhNWY3NjIyYjJmYjBiNGY5NGFjZTk1ZDQxMzU0MGM4MzEwYTVkMjQiLCJpYXQiOjE2ODQzMzI4MzB9.gWTuKA_ZVTO2OZk0PqNuMpM9Fc4ZRHQt0xfOVlI0IZc";

  var cid = tokenUrl
    .replace("https://", "")
    .replace("ipfs://", "")
    .replace(".json", "")
    .slice(0, -1);
  var fileName = tokenUrl.slice(-6);

  axios
    .get(`https://gateway.pinata.cloud/ipfs/${cid}/${fileName}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${JWT}`,
        Accept: "text/plain",
        // pinata_api_key: `${apiKey}`,
        // pinata_secret_api_key: `${apiSecret}`,
      },
    })
    .then((response) => {
      console.log("JSON file:", response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function ellipsisHash(hash) {
  return hash.slice(0, 8) + " ... " + hash.slice(-6);
}
