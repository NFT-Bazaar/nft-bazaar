//import Web3 from "web3";
import { providers, ethers, BigNumber } from "ethers";

export default async function connectMetamask() {
  if (!window.ethereum) {
    alert("Please install Metamask wallet extension.");
    return;
  }
  var provider, signer, addresses;
  provider = new ethers.BrowserProvider(window.ethereum);
  if (provider) {
    signer = await provider.getSigner();
  }
  addresses = await signer.getAddress();
  return [addresses].flat();
}
