import react, { useRef, useContext, createContext } from "react";
import axios from "axios";

export type Search = {
  name: string;
  title: string;
  value: any;
};
export type Method = {
  action: string;
  arg: any;
};
export type Action = {
  action: string;
  searchString: string;
  nftList: any;
};
export type SearchA = {
  isOpen: boolean;
  items: [];
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

function PanelSearch(props: { setMethodsEvents }) {
  const { stateSearch, setStateSearch } = useContext(
    SearchContext
  ) as SearchContextType;

  const events = props.setMethodsEvents("search", methods);
  const searchContainerRef = useRef(null);

  return (
    <div
      className={`text-gray-500 ${stateSearch.isOpen ? "w-1/4" : "w-0"}`}
      style={{ transition: "width 0.5s" }}
    >
      <div className="h-16 bg-gray-200"></div>

      <div
        ref={searchContainerRef}
        className="w-full max-w-sm h-screen p-4 overflow-x-hidden whitespace-nowrap"
      >
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
          onClick={() => getNFTList()}
        >
          Search
        </button>
      </div>
    </div>
  );

  function methods(method: Method) {
    switch (method.action) {
      case "":
        break;
    }
  }

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

  async function getNFTList() {
    var searchString = getSearchString();
    var response = { data: getSample() };
    // var response = await axios.get(
    //   `http://localhost:3000/api/nftlisted?searchString=${searchString}`
    // );
    if (response.data && response.data.length > 0) {
      //stateSearch.action({
      events({ action: "click", searchString, nftList: response.data });
    }
  }
  function getSample() {
    return [
      {
        metadata: {
          contract: {
            address: "0x6cd7c2200152ccc2d23dcad5859e4d9690ec312b",
            name: "Test for Arbitrum Goerli",
            symbol: "AGO",
            totalSupply: "4",
            tokenType: "ERC721",
            openSea: { lastIngestedAt: "2023-05-16T07:57:17.000Z" },
            contractDeployer: "0xc5331cc3bbe5a060de7d851ff33c2c5f1b611f16",
            deployedBlockNumber: 35655393,
          },
          tokenId: "2",
          tokenType: "ERC721",
          title: "",
          description: "",
          timeLastUpdated: "2023-05-18T09:16:23.628Z",
          metadataError: "Malformed token uri, do not retry",
          rawMetadata: { metadata: [], attributes: [] },
          tokenUri: {
            gateway: "",
            raw: "QmRiCHRcAwFiHovX1Jbghr1oXUffDVgaixxfH6CBUnjydW2.json",
          },
          media: [],
          balance: 1,
        },
        nft: {
          description: "Test NFT Collection - Rock",
          external_url: "",
          image: "ipfs://QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/2.json",
          name: "Rock",
          attributes: [
            { trait_type: "Base", value: "Rock" },
            { trait_type: "Background", value: "Gray" },
            { display_type: "number", trait_type: "Generation", value: 2 },
          ],
        },
        image:
          "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/2.jpg",
      },
      {
        metadata: {
          contract: {
            address: "0x6cd7c2200152ccc2d23dcad5859e4d9690ec312b",
            name: "Test for Arbitrum Goerli",
            symbol: "AGO",
            totalSupply: "4",
            tokenType: "ERC721",
            openSea: { lastIngestedAt: "2023-05-16T07:57:17.000Z" },
            contractDeployer: "0xc5331cc3bbe5a060de7d851ff33c2c5f1b611f16",
            deployedBlockNumber: 35655393,
          },
          tokenId: "3",
          tokenType: "ERC721",
          title: "",
          description: "",
          timeLastUpdated: "2023-05-18T09:16:23.628Z",
          metadataError: "Malformed token uri, do not retry",
          rawMetadata: { metadata: [], attributes: [] },
          tokenUri: {
            gateway: "",
            raw: "QmRiCHRcAwFiHovX1Jbghr1oXUffDVgaixxfH6CBUnjydW3.json",
          },
          media: [],
          balance: 1,
        },
        nft: {
          description: "Test NFT Collection - Dog",
          external_url: "",
          image: "ipfs://QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/3.json",
          name: "Dog",
          attributes: [
            { trait_type: "Base", value: "Dog" },
            { trait_type: "Background", value: "Brown" },
            { display_type: "number", trait_type: "Generation", value: 3 },
          ],
        },
        image:
          "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/3.jpg",
      },
      {
        metadata: {
          contract: {
            address: "0x6cd7c2200152ccc2d23dcad5859e4d9690ec312b",
            name: "Test for Arbitrum Goerli",
            symbol: "AGO",
            totalSupply: "4",
            tokenType: "ERC721",
            openSea: { lastIngestedAt: "2023-05-16T07:57:17.000Z" },
            contractDeployer: "0xc5331cc3bbe5a060de7d851ff33c2c5f1b611f16",
            deployedBlockNumber: 35655393,
          },
          tokenId: "4",
          tokenType: "ERC721",
          title: "",
          description: "",
          timeLastUpdated: "2023-05-18T09:16:23.624Z",
          metadataError: "Malformed token uri, do not retry",
          rawMetadata: { metadata: [], attributes: [] },
          tokenUri: {
            gateway: "",
            raw: "QmRiCHRcAwFiHovX1Jbghr1oXUffDVgaixxfH6CBUnjydW4.json",
          },
          media: [],
          balance: 1,
        },
        nft: {
          description: "Test NFT Collection - Fox",
          external_url: "",
          image: "ipfs://QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/4.json",
          name: "Fox",
          attributes: [
            { trait_type: "Base", value: "Fox" },
            { trait_type: "Background", value: "Brown" },
            { display_type: "number", trait_type: "Generation", value: 4 },
          ],
        },
        image:
          "https://gateway.pinata.cloud/ipfs/QmSDUDQKDcQR1BqgGHZKJ5GTZuGCsUejkPyLJ6MMQS3zQS/4.jpg",
      },
    ];
  }
}

export default PanelSearch;
