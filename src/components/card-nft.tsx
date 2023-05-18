import React from "react";
import Image from "next/image";
import { ellipsisHash } from "../scripts/utils";

export interface CardNFTProps {
  nft: any;
  // nftName: string;
  // address: string;
  // tokenUri: string;
  // imageUri: String;
  // attributes: any[];
  // nft: any;
  // ipfs: any;
  // subTitle?: string;
  // caption?: string;
  // titlePrice?: string;
  // price?: string;
  // cardClassName?: string;
  // contractDeployer: string;
  // deployedBlockNumber: string;
  // symbol: string;
  // tokenType?: string;
  // nft: any;
}

function CardNFT(nft: any) {
  var address = ellipsisHash(nft.metadata.contract.address);
  var contractDeployer = ellipsisHash(nft.metadata.contract.contractDeployer);

  return (
    <div className="bg-gray-200 flex justify-center items-center">
      <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-102 hover:shadow-1xl">
        <div>
          <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer whitespace-nowrap overflow-hidden">
            List to exchange
          </span>
          <h1 className="text-2xl mt-2 mx-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100 whitespace-nowrap overflow-hidden">
            {nft.nft.name}
          </h1>
          <p
            address={nft.metadata.contract.address}
            className="mx-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer whitespace-nowrap overflow-hidden"
          >
            {address}
          </p>
        </div>
        <Image
          className="w-full cursor-pointer"
          width={400}
          height={400}
          src={nft.image}
          alt=""
        />
        <div className="flex p-4 justify-between">
          <div className="flex items-center space-x-2">
            <h2
              contractDeployer={nft.metadata.contract.contractDeployer}
              className="text-gray-800 font-bold cursor-pointer whitespace-nowrap overflow-hidden"
            >
              {contractDeployer}
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="flex space-x-1 items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNFT;
