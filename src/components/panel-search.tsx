import react, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  useId,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidenav, initTE } from "tw-elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faChevronDown,
  faChevronUp,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { AnyARecord } from "dns";

export type Search = {
  name: string;
  title: string;
  value: any;
};
export type SearchA = {
  isOpen: boolean;
  items: [];
  action: (action: string, search: any) => any;
};
export type SearchContextType = {
  stateSearch: SearchA;
  setStateSearch: ([]) => void;
};
export const SearchContext = createContext<SearchContextType | null>(null);

export function initialStateSearch() {
  return [];
}

const searchs: Search[] = [
  { name: "metadata", title: "metadata / attributes", value: "" },
  { name: "address", title: "address", value: "" },
  { name: "token", title: "token", value: "" },
];
const switches: Search[] = [{ name: "online", title: "online", value: false }];

function PanelSearch(props: { callbackForMethod }) {
  const { stateSearch, setStateSearch } = useContext(
    SearchContext
  ) as SearchContextType;

  props.callbackForMethod("search", methods);

  return (
    <div
      className={`border-r-2 border-gray-200 text-gray-500 rounded-tr ${
        stateSearch.isOpen ? "w-1/4" : "w-0"
      }`}
      style={{ transition: "width 0.5s" }}
    >
      <div className="flex space-x-4 border-b-2 p-2 border-gray-200 h-16 place-content-center bg-gray-200"></div>

      <div className="w-100 w-full max-w-sm z-[1035] h-screen pt-6 px-4 border-r-2 border-gray-200 pt-14">
        {searchs.map((item, index) => (
          <div key={"search-t-" + index} className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2 whitespace-nowrap">
              {item.title}
            </label>
            <input
              search-key={"search-text-" + index}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800"
              type="text"
              id="name"
              name="name"
              placeholder={item.title}
            />
          </div>
        ))}
        {switches.map((item, index) => (
          <div key={"search-s-" + index} className="mb-4">
            <div className="flex items-center">
              <input
                search-key={"search-switch-" + index}
                id={item.name}
                aria-describedby={item.title}
                type="checkbox"
                className="bg-gray-50 border border-gray-300"
              />
              <div className="text-sm ml-3">
                <label
                  htmlFor={item.name}
                  className="font-medium text-gray-500 whitespace-nowrap"
                >
                  {item.title}
                </label>
              </div>
            </div>
          </div>
        ))}
        <button
          className="w-full bg-gray-700 text-white text-sm font-bold py-2 px-4 rounded-md transition duration-300"
          onClick={() => stateSearch.action("click", getSearchString())}
        >
          Search
        </button>
      </div>
    </div>
  );

  function methods(action: string, arg: any) {}

  function getSearchString() {
    searchs.forEach((x, index) => {
      var tag: any = document.querySelector(
        `input[type='text'][search-key='search-text-${index}']`
      );
      x.value = tag?.value;
    });
    switches.forEach((x, index) => {
      var tag: any = document.querySelector(
        `input[type='checkbox'][search-key='search-switch-${index}']`
      );
      x.value = tag?.value;
    });

    var queryTexts = searchs
      .filter((item) => item.value)
      .map((item) => `${item.name} = '${item.value}'`);
    const querySwitches = switches.map(
      (item) => `${item.name} = '${item.value}'`
    );

    queryTexts = [...queryTexts, ...querySwitches];

    return queryTexts.join(" AND ");
  }
}

// export function toggleSearch(toggle?: boolean) {
//   // if (rootRef.current) {
//   // }
//   var tag = document.getElementById(panelSearchId);
//   if (!tag) return;

//   var isOpen = true;
//   if (tag.classList.contains("w-0")) isOpen = false;
//   if (toggle === false || isOpen) {
//     tag.classList.add("w-0");
//     tag.classList.remove("w-1/4");
//   } else {
//     tag.classList.add("w-1/4");
//     tag.classList.remove("w-0");
//   }
// }

export default PanelSearch;
