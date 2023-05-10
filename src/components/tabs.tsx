import react, { useState } from "react";
// import Hashes from "jshashes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import BarContext from "../context/bar-context";

export type ItemBar = {
  text: string;
  count: number;
  definition: string;
};

var id: string = "";

export default function Tabs(props: { id: string }) {
  //[...Array(10).keys()]
  //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  const a = [1, 2, 3, 4].map(() => ({
    text: Math.random() < 0.5 ? "wallet" : "search",
    count: 4,
    definition: "{ metamask: '' }",
  }));
  const [bars, setBars] = useState<ItemBar[]>(a);

  id = props.id;
  return (
    // <ul
    //   id={props.id}
    //   className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700
    //   dark:text-gray-400 overflow-x-auto
    //  min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent
    // scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16]
    // dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96"
    // >
    <BarContext.Provider value={{ bars, setBars }}>
      <div className="w-500 px-2 grid grid-cols-1 gap-4 lg:col-span-3 relative  sm:overflow-hidden hidden sm:block bg-gray-700 border-gray-200">
        <ul
          id={props.id}
          className="-mb-px flex space-x-1 overflow-x-auto
                    flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent 
                    scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded 
                    dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96"
        >
          {bars.map((bar) => (
            <li className="mr-1" key={Math.floor(Math.random() * 10e6) + 1}>
              <a
                href="#"
                aria-current="page"
                className="inline-block py-2 px-4 text-gray-600 bg-gray-200 focus:bg-gray-100 focus:bg-gray-100 rounded-t-lg active dark:bg-gray-700 dark:text-gray-500"
              >
                {bar.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </BarContext.Provider>
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
