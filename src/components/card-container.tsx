import react, { useRef, useContext, createContext } from "react";
import Tabbar from "./tab-bar";
import CardGrid from "./card-grid";
import { setMethodsEvents } from "../context/main-context";

export type Method = {
  action: string;
  cardContainer: ItemCardContainer[] | [];
  index?: number;
};
export type ItemCardContainer = {
  key: string;
  searchString: string;
  nftList: any[];
};
export type ItemCardContainerA = {
  items: ItemCardContainer[];
};
export type CardContainerContextType = {
  stateCardContainer: ItemCardContainerA;
  setStateCardContainer: (cardContainer: ItemCardContainer[]) => void;
};
export const CardContainerContext =
  createContext<CardContainerContextType | null>(null);

export function initialStateCardContainer(): ItemCardContainer[] {
  return [];
  return [1, 2].map((x) => ({
    key: x.toString(),
    searchString: "",
    nftList: [],
  }));
}

function CardContainer(props: { setMethodsEvents }) {
  const { stateCardContainer, setStateCardContainer } = useContext(
    CardContainerContext
  ) as CardContainerContextType;

  const events = props.setMethodsEvents("cardContainer", methods);

  const cardContainerRef = useRef(null);

  return (
    <div
      ref={cardContainerRef}
      className="px-0 py-0 text-gray-500 bg-gray-200 w-screen"
    >
      <Tabbar setMethodsEvents={setMethodsEvents}></Tabbar>
      {stateCardContainer.items.map((cardGrid, index) => (
        <CardGrid
          key={cardGrid.key}
          searchString={cardGrid.searchString}
          nftList={cardGrid.nftList}
          setMethodsEvents={setMethodsEvents}
        ></CardGrid>
      ))}
    </div>
  );

  function methods(method: Method) {
    switch (method.action) {
      case "focus":
        //cardContainerRef.current.children[arg.index].classList. ().focus();
        break;
      case "update":
        (async () => {
          await new Promise((resolve) => {
            setStateCardContainer(method.cardContainer);
            resolve();
          });
          setTimeout(() => {
            method: methods({
              action: "focus",
              index: method.index,
              cardContainer: method.cardContainer,
            });
          }, 100);
        })();
      default:
        break;
    }
  }
}

export default CardContainer;
