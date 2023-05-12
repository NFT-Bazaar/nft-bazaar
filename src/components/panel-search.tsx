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

export type Search = {
  name: string;
  title: string;
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
  { name: "metadata", title: "metadata / attributes" },
  { name: "address", title: "address" },
  { name: "token", title: "token" },
];
const switchs: Search[] = [{ name: "online", title: "online" }];

function PanelSearch(props: {}) {
  const { stateSearch, setStateSearch } = useContext(
    SearchContext
  ) as SearchContextType;

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
          <div key={"search-text-" + item.name} className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2 whitespace-nowrap">
              {item.title}
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-800"
              type="text"
              id="name"
              name="name"
              placeholder={item.title}
            />
          </div>
        ))}
        {switchs.map((item, index) => (
          <div key={"search-switch-" + item.name} className="mb-4">
            <div className="flex items-center">
              <input
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

  function getSearchString() {
    const s = searchs.reduce((item) => {
      //var tag = document.querySelector("[key='search-text-"+${item.name.trim()}+"]");
      // if (tag?.value.trim() !== "") {
      //   return(" AND " + tag.value.trim());
      // }
      return "";
    }, {});
    return s;
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
