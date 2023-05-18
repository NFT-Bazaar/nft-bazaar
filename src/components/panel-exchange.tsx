import react, { useRef, useContext, createContext } from "react";
import axios from "axios";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";

import { Vampiro_One } from "next/font/google";

export type Exchange = {
  dateOffer: string;
  direction: "incoming" | "outgoing";
  image1: string;
  image2: string;
  dateAccept: string;
};
export type Method = {
  action: string;
  arg: any;
};
export type Action = {
  action: string;
  accept: boolean;
};
export type ExchangeA = {
  items: Exchange[];
  isOpen: boolean;
};
export type ExchangeContextType = {
  stateExchange: ExchangeA;
  setStateExchange: (exchanges: Exchange[]) => void;
};
export const ExchangeContext = createContext(null);

export function initialStateExchange(): Exchange[] {
  return [
    {
      dateOffer: "2023/03/12 08:00:00",
      direction: "incoming",
      image1:
        "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/1.jpg",
      image2:
        "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/2.jpg",
      dateAccept: "2023/03/12 08:02:00",
    },
    {
      dateOffer: "2023/03/12 08:00:00",
      direction: "outgoing",
      image1:
        "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/3.jpg",
      image2:
        "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/4.jpg",
      dateAccept: "2023/03/12 08:02:00",
    },
    {
      dateOffer: "2023/03/12 08:00:00",
      direction: "incoming",
      image1:
        "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/4.jpg",
      image2:
        "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/1.jpg",
      dateAccept: "2023/03/12 08:02:00",
    },
  ];
}

interface props {
  method: (action: any) => void;
}

function PanelExchange(props: { setMethodsEvents }) {
  const { stateExchange, setStateExchange } = useContext(
    ExchangeContext
  ) as ExchangeContextType;

  const events = props.setMethodsEvents("exchange", methods);
  const exchangeContainerRef = useRef(null);

  return (
    <div
      className={`text-gray-500 ${stateExchange.isOpen ? "w-1/4" : "w-0"}`}
      style={{ transition: "width 0.5s" }}
    >
      <div className="h-16 bg-gray-200"></div>
      <ul className="h-screen w-full relative list-none p-4 overflow-x-hidden whitespace-nowrap">
        {" "}
        {[stateExchange.items].flat().map((exchange: Exchange, idx: number) => (
          <li
            index={idx}
            key={exchange.dateOffer}
            className="flex flex-row relative overflow-x-hidden whitespace-nowrap"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white shadow-lg rounded-lg p-4 flex">
                <div className="flex-shrink-0">
                  <Image
                    src="https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/1.jpg"
                    alt="Left Image"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-grow pl-4">
                  <h3 className="text-xl font-bold">Card Header</h3>
                  <p className="text-gray-500">Text between images</p>
                  <div className="flex justify-end">
                    <Image
                      src="https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/2.jpg"
                      alt="Right Image"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Add more cards as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  function methods(method: Method) {
    switch (method.action) {
      case "":
        break;
    }
  }

  function removeExchange(exchange: string) {
    // var data: Exchange[] = stateExchange.items.filter(
    //   (exc) => exc.exchange !== exchange
    // );
    // setStateExchange({
    //   items: data,
    //   isOpen: stateExchange.isOpen,
    // });
  }
}

export default PanelExchange;
