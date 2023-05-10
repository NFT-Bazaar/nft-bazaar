import Web3 from "web3";
import { providers } from "ethers";

const KeplrMainnets = [
  {
    name: "Cosmos Hub",
    chainId: "0x3",
  },
  {
    name: "IRISnet",
    chainId: "0x1a",
  },
  {
    name: "BandChain",
    chainId: "0xba",
  },
  {
    name: "Kava",
    chainId: "0x4d",
  },
  {
    name: "Binance Smart Chain",
    chainId: "0x38",
  },
  {
    name: "Terra",
    chainId: "0xa",
  },
  {
    name: "OKExChain",
    chainId: "0x42",
  },
  {
    name: "Persistence",
    chainId: "0xb1",
  },
  {
    name: "Sentinel",
    chainId: "0x90",
  },
  {
    name: "Secret Network",
    chainId: "0x5",
  },
  {
    name: "LikeCoinChain",
    chainId: "0x69",
  },
  {
    name: "Osmosis",
    chainId: "0x1",
  },
  {
    name: "Sifchain",
    chainId: "0x16b",
  },
  {
    name: "Regen Network",
    chainId: "0x5f4b62",
  },
  {
    name: "Starname",
    chainId: "0x99",
  },
  {
    name: "Crypto.org Chain",
    chainId: "0x39",
  },
  {
    name: "Akash",
    chainId: "0x6c",
  },
  {
    name: "Persistence (Testnet)",
    chainId: "0xa0",
  },
  {
    name: "IRISnet (Testnet)",
    chainId: "0x2710",
  },
  {
    name: "Regen Network (Testnet)",
    chainId: "0x462",
  },
];

export default async function connectKeplr() {
  if (!window.keplr) {
    alert("Please install Keplr wallet extension.");
    return;
  }

  // Request access to a specific chain (e.g. Cosmos)
  const chainId = "cosmoshub-4"; // Replace with the desired chain ID
  try {
    await window.keplr.enable(chainId);
  } catch (e) {
    alert(
      `Failed to enable ${chainId} chain. Please make sure you grant access to the chain in your Keplr wallet.`
    );
    return;
  }

  // Get the Keplr signer object for the current chain
  const offlineSigner = window.getOfflineSigner(chainId);

  // Get the user's address for the current chain
  const accounts = await offlineSigner.getAccounts();
  if (accounts.length > 0)
    return accounts.map((account) => account.address).flat();
  else return [];

  // Use the address to scan the blockchain or perform other operations
  // Example:
  //   const balance = await web3.eth.getBalance(address);
  //   console.log(
  //     `Address ${address} has a balance of ${balance} wei on the ${chainId} chain.`
  //   );
}
