import react, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  useId,
} from "react";
import Link from "next/link";
import Image from "next/image";

// import LockedWallet from "./svgs/locked-wallet";

type sideSide = {
  image: string;
  toggle: any;
};

interface ItemSide {
  name: string;
  image: string;
}
export type ItemSideA = {
  items: ItemSide[];
  action: (action: string, tab: ItemSide) => any;
};
export type SideContextType = {
  stateSide: ItemSideA;
  setStateSide: (tabs: ItemSide[]) => void;
};
export const SideContext = createContext<SideContextType | null>(null);

export function initialStateSide(): ItemSide[] {
  return [
    { name: "wallet", image: "/static/images/locked-wallet.svg" }, //, toggle: toggleWallet },
    { name: "search", image: "/static/images/air-search.svg" }, //, toggle: toggleSearch },
    { name: "exchange", image: "/static/images/exchange.svg" }, //, toggle: toggleExchange },
  ];
}

function Sidebar(props: { callbackForMethod }) {
  const { stateSide, setStateSide } = useContext(
    SideContext
  ) as SideContextType;

  const logo1 = "/static/images/logo1.png";

  props.callbackForMethod("side", methods);

  return (
    <div className="flex flex-row">
      <nav
        className="bg-gray-60 w-16 flex flex-col p-2 h-[calc(100vh)] left-0 border-gray-200 bg-gray-200"
        // style={{ backgroundColor: "#C2C238" }}
      >
        <div className="mt-8 w-12">
          <ul className="place-self-center">
            {[stateSide.items].flat().map((side: ItemSide) => (
              <li
                key={side.name}
                className="mt-3 mb-2 pt-3 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-400 hover:rounded-md"
                data-te-sidenav-toggle-ref
                data-te-target="#panel2"
                aria-controls="#panel2"
                aria-haspopup="true"
              >
                <div className="h-10 relative">
                  <Image
                    src={side.image}
                    className="rounded-full mx-auto"
                    alt="NFT Bazaar"
                    fill
                    onClick={() => stateSide.action("click", side)}
                  ></Image>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );

  function methods(action: string, arg?: any) {}

  // function handlePanels(toggle: any) {
  //   if (toggle != toggleWallet) toggleWallet(false);
  //   if (toggle != toggleSearch) toggleSearch(false);
  //   if (toggle != toggleExchange) toggleExchange(false);

  //   toggle();
  // }
}

export default Sidebar;
