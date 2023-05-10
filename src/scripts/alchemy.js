//import Web3 from "web3";
import { ethers, BigNumber } from "ethers";
import { Network, Alchemy } from "alchemy-sdk";

AlchemyMainnets = [
  { name: "Avalanche Mainnet", chainId: "0xA86A" },
  { name: "Binance Smart Chain Mainnet", chainId: "0x38" },
  { name: "Celo Mainnet", chainId: "0xa4EC" },
  { name: "Ethereum Mainnet", chainId: "0x1" },
  { name: "Ethereum Classic Mainnet", chainId: "0x3D" },
  { name: "Fantom Opera Mainnet", chainId: "0xFA" },
  { name: "Huobi ECO Chain Mainnet", chainId: "0x80" },
  { name: "OKExChain Mainnet", chainId: "0x42" },
  { name: "Polygon Mainnet", chainId: "0x89" },
  { name: "xDai Chain", chainId: "0x64" },
];
AlchemyTestnets = [
  { name: "Avalanche Fuji Testnet", chainId: "0xA87D" },
  { name: "Binance Smart Chain Testnet", chainId: "0x61" },
  { name: "Celo Alfajores Testnet", chainId: "0x43B" },
  { name: "Ethereum Rinkeby Testnet", chainId: "0x4" },
  { name: "Ethereum Ropsten Testnet", chainId: "0x3" },
  { name: "Harmony Testnet", chainId: "0x190" },
  { name: "Optimism Kovan Testnet", chainId: "0x45" },
  { name: "Polygon Mumbai Testnet", chainId: "0x13881" },
  { name: "RSK Testnet", chainId: "0x1F" },
  { name: "xDai Chain Testnet", chainId: "0x100" },
];

export default async function getNFTAlchemy(address) {
  var nfts;
  AlchemyMainnets.forEach(async function (chain) {
    //await switchChain(net.chainId);
    const settings = {
      apiKey: process.env.ALCHEMY_API_KEY,
      network: chain.name, //"polygon-mumbai", //net, //chainId2;  //Network.ETH_MAINNET, // Replace with your network.
    };
    const alchemy = new Alchemy(settings);
    nfts = { nfts, ...(await alchemy.nft.getNftsForOwner(address)) };
  });
  return nfts;
}
