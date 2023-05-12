import react, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  useId,
} from "react";

// import Hashes from "jshashes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export type ItemTab = {
  key: string;
  text: string;
  count: number;
  definition: string;
};
export type ItemTabA = {
  items: ItemTab[];
  action: (action: string, tab: ItemTab) => any;
};
export type TabContextType = {
  stateTab: ItemTabA;
  setStateTab: (tabs: ItemTab[]) => void;
};
export const TabContext = createContext<TabContextType | null>(null); //(initialStateTab);

export function initialStateTab(): ItemTab[] {
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
    definition: "{ metamask: '' }",
  }));
}

function Tabbar(props: {}) {
  const { stateTab, setStateTab } = useContext(TabContext) as TabContextType;

  return (
    <div className="px-2 relative sm:block bg-gray-700 border-gray-200 items-start">
      <ul
        className="-mb-px flex space-x-1 overflow-hidden
                    min-w-full px-4 sm:px-6 md:px-0  
                    scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent 
                    scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded 
                    dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96"
      >
        {[stateTab.items].flat().map((tab: ItemTab) => (
          <li className="mr-1" key={Math.floor(Math.random() * 10e6) + 1}>
            <button
              aria-current="page"
              className="inline-block py-2 px-4 text-gray-600 bg-gray-200 focus:bg-gray-100 hover:bg-gray-100 rounded-t-lg 
                active dark:bg-gray-700 dark:text-gray-500"
              onClick={() => stateTab.action("click", tab)}
            >
              {tab ? tab.text : ""}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function RemoveTab(key: string) {
    document.querySelector(`[key=${key}]`).interHTML = "";
    // setBars(data);

    //     const listItemToRemove = document.querySelector('#list-item-to-remove');
    // const unorderedList = document.querySelector('#my-list');

    // if (listItemToRemove && unorderedList) {
    //   unorderedList.removeChild(listItemToRemove);
    // }
  }
}

// export function myProfileTab(stateTab: ItemTab[], accounts: Account[]) {
//   if (stateTab.find((x) => x.key === "myProfile") == undefined) {
//     const profileTab: ItemTab = {
//       key: "myProfile",
//       text: "myProfile",
//       count: 0,
//       definition: "",
//     };
//     const newTabs = [profileTab, ...tabs];
//     setStateTab(newTabs);
//   }
// }
// export function AddTab(bar: ItemBar) {
//   var data: ItemBar[] = Array.from(new Set([...bars, ...bar]));
//   setBars(data);

//     var ul = document.querySelector(`[id="${id}"]`);
//   //var : any = ul.children[ul.children.length - 1];
//   ul.innerHTML += `<li className='mr-1' key=${
//     Math.floor(Math.random() * 10e6) + 1
//   }>
//       <a
//         href="#"
//         aria-current="page"
//         class="inline-block py-2 px-4 text-gray-600 bg-gray-200 focus:bg-gray-100 rounded-t-lg active dark:bg-gray-700 dark:text-gray-500"
//       >
//         ${bar.text}
//       </a>
//       <FontAwesomeIcon
//         icon={faTrash}
//         className="self-center text-gray-800 cursor-pointer px-4"
//         onClick={() => RemoveTab(${Math.floor(Math.random() * 10e6) + 1})}
//         />
//     </li>`;
//}

export default Tabbar;
