import react, { useRef, useContext, createContext } from "react";
import Image from "next/image";

interface ItemSide {
  name: string;
  image: string;
}
export type ItemSideA = {
  items: ItemSide[];
};
export type SideContextType = {
  stateSide: ItemSideA;
  setStateSide: (tabs: ItemSide[]) => void;
};
export const SideContext = createContext<SideContextType | null>(null);

export function initialStateSide(): ItemSide[] {
  return [
    { name: "wallet", image: "/static/images/locked-wallet.svg" },
    { name: "search", image: "/static/images/air-search.svg" },
    { name: "exchange", image: "/static/images/exchange.svg" },
  ];
}

function Sidebar(props: { setMethodsEvents }) {
  const { stateSide, setStateSide } = useContext(
    SideContext
  ) as SideContextType;

  const events = props.setMethodsEvents("side", methods);
  const sidebarContainerRef = useRef(null);

  return (
    <div className="flex flex-row w-16 sticky border-gray-200 bg-gray-200">
      <nav
        className="sticky top-0 w-full bg-gray-60 flex flex-col p-2 left-0 border-gray-200 bg-gray-200"

        // style={{ backgroundColor: "#C2C238" }}   h-[calc(100vh)]
      >
        <div className="mt-8 w-12">
          <ul ref={sidebarContainerRef} className="place-self-center">
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
                    onClick={() => events({ action: "click", side })}
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
}

export default Sidebar;
