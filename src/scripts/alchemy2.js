//import Web3 from "web3";
import { ethers, BigNumber } from "ethers";

// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";

async function switchChain(chainId) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  try {
    await provider.provider.getRpcRequest({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainId }],
    });
    console.log("You have succefully switched to Binance Test network");
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      console.log(
        "This network is not available in your metamask, please add it"
      );
    }
    console.log("Failed to switch to the network");
  }
}

export default async function alchemy2() {
  //await switchChain("0x61");

  const provider2 = new ethers.BrowserProvider(window.ethereum);
  const signer2 = await provider2.getSigner();
  const address2 = await signer2.getAddress();
  //const chainId2 = (await provider.getNetwork()).chainId;
  //console.log(chainId2, ", ", address2);
  //---------------------------------

  [
    { name: "polygon-mumbai", chainId: "0x13881" },
    { name: "arb-goerli", chanId: "0x66EED" },
    // { name: "eth-rinkeby", chainId: "" },
  ].forEach(async function (net) {
    await switchChain(net.chainId);
    // Optional Config object, but defaults to demo api-key and eth-mainnet.
    const settings = {
      apiKey: "ewnNwWyVDNqShvyY5BiNRK4-MNuzQzLl", // Replace with your Alchemy API Key.
      network: net.name, //"polygon-mumbai", //net, //chainId2;  //Network.ETH_MAINNET, // Replace with your network.
    };

    const alchemy = new Alchemy(settings);

    // Print owner's wallet address:
    const ownerAddr = address2; //"vitalik.eth";
    console.log("fetching NFTs for address:", ownerAddr);
    console.log("...");

    // Print total NFT count returned in the response:
    const nftsForOwner = await alchemy.nft.getNftsForOwner(address2); //"vitalik.eth");
    console.log("number of NFTs found:", nftsForOwner.totalCount);
    console.log("...");

    // Print contract address and tokenId for each NFT:
    for (const nft of nftsForOwner.ownedNfts) {
      console.log("===");
      console.log("contract address:", nft.contract.address);
      console.log("token ID:", nft.tokenId);
    }
    console.log("===");

    // Fetch metadata for a particular NFT:
    console.log("fetching metadata for a Crypto Coven NFT...");
    const response = await alchemy.nft.getNftMetadata(
      "0x5180db8F5c931aaE63c74266b211F580155ecac8",
      "1590"
    );

    // Uncomment this line to see the full api response:
    // console.log(response);

    // Print some commonly used fields:
    console.log("NFT name: ", response.title);
    console.log("token type: ", response.tokenType);
    console.log("tokenUri: ", response.tokenUri.gateway);
    console.log("image url: ", response.rawMetadata.image);
    console.log("time last updated: ", response.timeLastUpdated);
    console.log("===");
  });
}
