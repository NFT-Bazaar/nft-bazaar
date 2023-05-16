import React from "react";
import CardNFT from "./card-nft";

function CardGrid(props: {}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full p-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((x) => (
        <CardNFT></CardNFT>
      ))}
    </div>

    // <div className="flex flex-wrap -mx-4">
    //   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4">

    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10">
    //   <CardDetail></CardDetail>
    //   <CardDetail></CardDetail>
    //   <CardDetail></CardDetail>
    //   <CardDetail></CardDetail>
    //   <CardDetail></CardDetail>
    //   <CardDetail></CardDetail>
    // </div>
    // </div>
  );
}

export default CardGrid;
