import { ThirdWeb } from "@thirdweb-dev/react";
import { useOwnedNFTs } from "@thirdweb-dev/react";

export default async function getNFTThirdweb(address) {
  const thirdWeb = new ThirdWeb();

  const walletAddress = "0x1234567890123456789012345678901234567890"; // Replace with your wallet address
  const chainId = "0x1"; // Replace with the chain ID of the blockchain you want to query

  async function getNFTs() {
    const nfts = await thirdWeb.getNFTs(walletAddress, chainId);
    console.log("NFTs:", nfts);
  }

  getNFTs();
}
