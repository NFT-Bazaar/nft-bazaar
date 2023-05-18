import react, { useRef, useContext, createContext } from "react";
import Image from "next/image";

import CardNFT from "./card-nft";

export type ItemCardGrid = {
  key: string;
  searchString: string;
  nftList: any[];
};
export type ItemCardGridA = {
  items: ItemCardGrid[];
};
export type CardGridContextType = {
  stateCardGrid: ItemCardGridA;
  setStateCardGrid: (cardGrid: ItemCardGrid[]) => void;
};
export const CardGridContext = createContext<CardGridContextType | null>(null);

export function initialStateCardGrid(): ItemCardGrid[] {
  return [];
  return [1, 2].map((x) => ({
    key: x.toString(),
    searchString: "",
    nftList: [],
  }));
}

interface CardGridProps {
  key: string;
  searchString: string;
  nftList: any;
  setMethodsEvents: (action: any) => void;
}

function CardGrid(props: CardGridProps) {
  const { key, searchString, nftList } = props;

  const { stateCardGrid, setStateCardGrid } = useContext(
    CardGridContext
  ) as CardGridContextType;

  const events = props.setMethodsEvents("cardGrid", methods);

  const cardGridContainerRef = useRef(null);

  return (
    <div
      key={props.key}
      ref={cardGridContainerRef}
      className="z-10 bg-gray-200 p-4 overflow-x-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-6"
    >
      {nftList.map((nft, j) => (
        <CardNFT key={nft.cid + j} {...nft}></CardNFT>
      ))}
    </div>
  );

  function methods() {}
}

export default CardGrid;
