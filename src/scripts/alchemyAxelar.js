import { ethers, BigNumber } from "ethers";
import { Network, Alchemy } from "alchemy-sdk";
import { Client, Wallet, AxelarQueryAPI } from "@axelar-network/axelarjs-sdk";

import { Contract, getDefaultProvider } from "ethers";
import AxelarGatewayContract from "../../data/IAxelarGateway.json";
import AxelarGasServiceContract from "../../data/IAxelarGasService.json";
import IERC20 from "../../data/IERC20.json";
// import AxelarGatewayContract from "artifacts/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol/IAxelarGateway.json";
// import AxelarGasServiceContract from "artifacts/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol/IAxelarGasService.json";
// import IERC20 from "artifacts/@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol/IERC20.json";

function calculateBridgeFee(source, destination, options = {}) {
  const api = new AxelarQueryAPI({ environment: 'testnet' });
  const { gasLimit, gasMultiplier, symbol } = options;

  return api.estimateGasFee(
    source.name.toUpperCase(),
    destination.name.toUpperCase(),
    symbol || source.tokenSymbol,
    gasLimit,
    gasMultiplier
  );
}
function deserializeContract(chain, wallet) {
  // Loop through every keys in the chain object.
  for (const key of Object.keys(chain)) {
    // If the object has an abi, it is a contract.

    if (chain[key].abi) {
      // Get the contract object.
      const contract = chain[key];

      // Deserialize the contract. Assign the contract to the chain object.
      chain[key] = new Contract(contract.address, contract.abi, wallet);
    }
  }

  return chain;
}

export default async function alchemyAxelar() {
  const { chain, signer2, nft } = await alchemy3();
  await axelar2(chain, signer2, nft);
}

async function alchemy3() {
  //await switchChain("0x61");

  const provider2 = new ethers.BrowserProvider(window.ethereum);
  const signer2 = await provider2.getSigner();
  const address2 = await signer2.getAddress();
  //---------------------------------
  const chains = [
    { name: "polygon-mumbai", chainId: "0x13881" },
    { name: "arb-goerli", chanId: "0x66EED" },
    { name: "eth-rinkeby", chainId: "" },
  ];
  const chain = chains[0];
  // await switchChain(chain.chainId);
  const settings = {
    apiKey: "ewnNwWyVDNqShvyY5BiNRK4-MNuzQzLl",
    network: chain.name,
  };

  const alchemy = new Alchemy(settings);
  const ownerAddr = address2;
  const nftsForOwner = await alchemy.nft
  //.getNftsForOwner("0xC5331Cc3BBE5A060de7d851fF33c2c5f1b611F16"); 
  .getNftsForOwner("0xCDB1af9f423E438694e9F8f447aa35b3fDe2DD81");  //' //address2);
  const nft = nftsForOwner.ownedNfts[0];

  //--------------------------------------------

  return { chain, signer2, nft };
}

async function axelar2(chain, wallet, nft) {
  const env = "testnet";
  const source1 = "Polygon";
  const destination1 = "Arbitrum";
  //checkEnv(env);
  //--------------------------------------------------------
  //const wallet = getWallet();
  //--------------------------------------------------------
  var chains = require("@axelar-network/axelar-cgp-solidity/info/testnet.json");
  for (const chain of chains) {
    (chain.gasService = {
      address: "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
    }),
      (chain.provider = getDefaultProvider(chain.rpc));
    const connectedWallet = wallet; //.connect(chain.provider);
    // Initialize contracts to chain object.
    deserializeContract(chain, connectedWallet);
    // Recover axelar contracts to chain object.
    // chain.gateway = new Contract(
    //   chain.gateway,
    //   AxelarGatewayContract.abi,
    //   connectedWallet
    // );
    // chain.gasService = new Contract(
    //   chain.gasService,
    //   AxelarGasServiceContract.abi,
    //   connectedWallet
    // );
    // const tokenAddress = await chain.gateway.tokenAddresses("aUSDC");
    // chain.usdc = new Contract(tokenAddress, IERC20.abi, connectedWallet);
  }
  //--------------------------------------------------------
  const source = chains.find((chain1) => chain1.name === source1);
  const destination = chains.find((chain1) => chain1.name === destination1);
  //--------------------------------------------------------
  const fee = await calculateBridgeFee(source, destination);

  await (
    await source.erc721.approve(source.contract.address, nft.tokenId)
  ).wait();

  await (
    await source.contract.sendNFT(
      originChain === source ? source.erc721.address : source.contract.address,
      nft.tokenId,
      destination.name,
      wallet.getAddress(),
      { value: fee }
    )
  ).wait();
}

async function axelar4() {
  const fee = await calculateBridgeFee(
    { name: "AVALANCHE", tokenSymbol: "" },
    { name: "POLYGON" }
  );

  if (originChain === source) {
    await (
      await source.erc721.approve(source.contract.address, owner.tokenId)
    ).wait();
  }

  await (
    await source.contract.sendNFT(
      originChain === source ? source.erc721.address : source.contract.address,
      owner.tokenId,
      destination.name,
      wallet.address,
      { value: fee }
    )
  ).wait();

  while (true) {
    const owner = await ownerOf();
    if (owner.chain === destination.name) break;
    await sleep(2000);
  }
}

async function axelar3(chain, source, nft) {
  // Define the parameters
  //const source = "0xC5331Cc3BBE5A060de7d851fF33c2c5f1b611F16";
  const destination = "0x64C38cD288F04a60014e1C6c4E8872B1B62D05f0B";

  // Create a new client with the Axelar SDK
  const client = new Client();

  // Create a new wallet object for the source address
  const wallet = new Wallet(client, source);

  // Connect to the chain
  await client.connect(chain.chainId);

  // Get the NFT1 token instance
  const nftToken = await client.getNFT1Token(nft.tokenId);

  // Get the balance of the source wallet
  const balance = await nftToken.getBalance(source);

  // Transfer the NFT1 token to the destination address
  await nftToken.transfer(wallet, destination, 1);

  // Disconnect from the chain
  await client.disconnect();
}
