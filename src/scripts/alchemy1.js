import { Network, Alchemy } from "alchemy-sdk";

export default function alchemy1() {
  const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  // get the latest block
  const latestBlock = alchemy.core.getBlock("latest").then(console.log);
}
