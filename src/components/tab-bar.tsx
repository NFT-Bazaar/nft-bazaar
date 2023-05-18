import react, { useRef, useContext, createContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export type Method = {
  action: string;
  tabs: ItemTabA;
  index?: number;
};
export type ItemTab = {
  key: string;
  text: string;
  count: number;
};
export type ItemTabA = {
  items: ItemTab[];
};
export type TabContextType = {
  stateTab: ItemTabA;
  setStateTab: (tabs: ItemTabA) => void;
};
export const TabContext = createContext<TabContextType | null>(null); //(initialStateTab);

export function initialStateTab(): ItemTab[] {
  return [];
  return [
    1,
    2,
    3,
    4, //5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 17,
    18,
    19,
    20,
  ].map((x) => ({
    key: x.toString(),
    text: Math.random() < 0.5 ? "wallet" : "search",
    count: 4,
  }));
}

interface props {
  method: (action: any) => void;
}

function Tabbar(props: { setMethodsEvents }) {
  const { stateTab, setStateTab } = useContext(TabContext) as TabContextType;

  const events = props.setMethodsEvents("tab", methods);

  const tabContainerRef = useRef(null);

  return (
    <div className="px-2 relative sm:block bg-gray-700 border-gray-200 items-start">
      <ul
        ref={tabContainerRef}
        className="-mb-px flex space-x-1 overflow-hidden
                    min-w-full px-4 sm:px-6 md:px-0  
                    scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent 
                    scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded 
                    dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96"
      >
        {[stateTab.items].flat().map((tab: ItemTab, idx: number) => (
          <li
            index={idx}
            className="mr-1"
            key={Math.floor(Math.random() * 10e6) + 1}
          >
            <button
              aria-current="page"
              className="inline-block py-2 px-4 text-gray-600 bg-gray-200 focus:bg-gray-100 hover:bg-gray-100 rounded-t-lg 
                active dark:bg-gray-700 dark:text-gray-500"
              onClick={() => events("click", tab)}
            >
              {tab ? tab.text : ""}
              <FontAwesomeIcon
                icon={faTrash}
                className="self-center cursor-pointer pl-4"
                onClick={() => removeTab(idx)}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function methods(method: Method) {
    switch (method.action) {
      case "focus":
        tabContainerRef.current.children[method.index].focus();
        break;
      case "update":
        (async () => {
          await new Promise((resolve) => {
            setStateTab(method.tabs);
            resolve();
          });
          setTimeout(() => {
            methods({
              action: "focus",
              index: method.index,
              tabs: method.tabs,
            });
          }, 100);
        })();
      default:
        break;
    }
  }

  function removeTab(idx: number) {
    var data: ItemTab[] = stateTab.items.filter((tab, index) => index !== idx);
    setStateTab({ items: data });
    events({ action: "removeTab", index: idx });
  }
}

export default Tabbar;
