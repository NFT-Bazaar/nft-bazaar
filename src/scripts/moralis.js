//import Web3 from "web3";
import { ethers, BigNumber } from "ethers";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

// MoralisMainnets = [
//   { name: "Avalanche Mainnet", chainId: "0xA86A" },
//   { name: "Binance Smart Chain Mainnet", chainId: "0x38" },
//   { name: "Celo Mainnet", chainId: "0xa4EC" },
//   { name: "Ethereum Mainnet", chainId: "0x1" },
//   { name: "Ethereum Classic Mainnet", chainId: "0x3d" },
//   { name: "Fantom Opera Mainnet", chainId: "0xFA" },
//   { name: "Harmony Mainnet", chainId: "0x63564C40" },
//   { name: "Huobi ECO Chain Mainnet", chainId: "0x80" },
//   { name: "OKExChain Mainnet", chainId: "0x42" },
//   { name: "Polygon Mainnet", chainId: "0x89" },
//   { name: " xDai Chain", chainId: "0x64" },
// ];
MoralisMainnets = [
  { name: "eth", chainId: "0x1", chainIDD: 1 },
  { name: "goerli", chainId: "0x5", chainIDD: 5 },
  { name: "sepolia", chainId: "0xaa36a7", chainIDD: 11155111 },
  { name: "polygon", chainId: "0x89", chainIDD: 137 },
  { name: "mumbai", chainId: "0x13881", chainIDD: 80001 },
  { name: "bsc", chainId: "0x38", chainIDD: 56 },
  { name: "bsc testnet", chainId: "0x61", chainIDD: 97 },
  { name: "avalanche", chainId: "0xa86a", chainIDD: 43114 },
  { name: "avalanche testnet", chainId: "0xa869", chainIDD: 43113 },
  { name: "fantom", chainId: "0xfa", chainIDD: 250 },
  { name: "cronos", chainId: "0x19", chainIDD: 25 },
  { name: "cronos testnet", chainId: "0x152", chainIDD: 338 },
  { name: "palm", chainId: "0x2a15c308d", chainIDD: 11297108109 },
  { name: "arbitrum", chainId: "0xa4b1", chainIDD: 42161 },
];
MoralisTestnets = [
  { name: "Avalanche Fuji Testnet", chainId: "0xA869" },
  { name: "Binance Smart Chain Testnet", chainId: "0x61" },
  { name: "Celo Alfajores Testnet", chainId: "0xa4f1" },
  { name: "Celo Baklava Testnet", chainId: "0x7f" },
  { name: "Ethereum Kovan Testnet", chainId: "0x2a" },
  { name: "Ethereum Rinkeby Testnet", chainId: "0x4" },
  { name: "Ethereum Ropsten Testnet", chainId: "0x3" },
  { name: "Fantom Testnet", chainId: "0xfa2" },
  { name: "Harmony Testnet", chainId: "0x6357D2E0" },
  { name: "Klaytn Baobab Testnet", chainId: "0x1001" },
  { name: "Moonbase Alpha Testnet", chainId: "0x507" },
];

export default async function getNFTMoralis(address) {
  var nfts;
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });
  MoralisMainnets.forEach(async function (chain) {
    //await switchChain(net.chainId);
    const settings = { address: address, chain: chain.chainId };
    nfts = { nfts, ...(await Moralis.EvmApi.nft.getWalletNFTs(settings)) };
  });
  return nfts;
}
