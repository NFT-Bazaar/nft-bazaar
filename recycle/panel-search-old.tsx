import react, { useState, useEffect } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

export interface SubItem {
  index: number;
  text?: string;
  image?: string;
}

export interface Item {
  index: number;
  text?: string;
  image?: string;
  subItems?: SubItem[];
}

type MyProps = {
  isOpen: boolean;
};

function PanelSearchOld({ isOpen }: MyProps) {
  const wallets = [
    { name: "metamask", image: "/static/images/metamask.svg" },
    { name: "keplr", image: "/static/images/keplr.svg" },
    { name: "trustwallet", image: "/static/images/trustwallet.svg" },
    { name: "coinbase", image: "/static/images/coinbase.svg" },
  ];
  const menu: Item[][] = [
    [
      {
        text: "category 1",
        index: 1,
        image: "/static/images/metamask.svg",
        subItems: [
          { text: "link 1", index: 1, image: "/static/images/metamask.svg" },
          { text: "link 2", index: 2, image: "/static/images/metamask.svg" },
        ],
      },
      {
        text: "category 2",
        index: 2,
        image: "/static/images/metamask.svg",
        subItems: [
          {
            text: "category 1",
            index: 1,
            image: "/static/images/metamask.svg",
          },
          {
            text: "category 2",
            index: 2,
            image: "/static/images/metamask.svg",
          },
        ],
      },
    ],
    [
      {
        text: "Category 3",
        index: 3,
        image: "/static/images/keplr.svg",
        subItems: [
          {
            text: "category 1",
            index: 1,
            image: "/static/images/keplr.svg",
          },
          {
            text: "category 2",
            index: 2,
            image: "/static/images/keplr.svg",
          },
          {
            text: "category 3",
            index: 3,
            image: "/static/images/keplr.svg",
          },
          {
            text: "category 4",
            index: 4,
            image: "/static/images/keplr.svg",
          },
        ],
      },
      {
        text: "category 4",
        index: 4,
        image: "/static/images/keplr.svg",
        subItems: [
          {
            text: "category 1",
            index: 1,
            image: "/static/images/keplr.svg",
          },
        ],
      },
    ],
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      //initTE({ Sidenav });
    }
  }, [isClient]);

  return (
    <div>
      <div className="flex space-x-4 border-b-2 border-r-2 h-12 place-content-center">
        {wallets.map((x, index) => (
          <Image
            key={x.name}
            src={x.image}
            alt="NFT Bazaar"
            width={30}
            height={30}
          ></Image>
        ))}
      </div>
      <nav
        id="panel2"
        className="z-[1035] h-screen w-60 pt-2 -translate-x-full overflow-hidden data-[te-sidenav-hidden='false']:translate-x-0 border-r-2"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-accordion="true"
      >
        {menu.map((items, ix) => (
          <ul
            key={ix}
            className="relative m-0 list-none"
            data-te-sidenav-menu-ref
          >
            {items.map((item, iy) => (
              <li key={item.index} className="relative">
                <button
                  className="flex h-8 w-full cursor-pointer items-center truncate rounded-[5px] px-4 py-2 text-[0.7rem] text-gray-500 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref
                >
                  {item.image && (
                    <div className="mr-[0.8rem] h-4 w-4 relative">
                      <Image
                        src={item.image}
                        className="rounded-full mx-auto relative select-none"
                        alt="NFT Bazaar"
                        fill
                      ></Image>
                    </div>
                  )}

                  <span>Account {ix + iy}</span>
                  <span
                    className="absolute right-0 ml-auto mr-[1rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                    data-te-sidenav-rotate-icon-ref
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}
                  </span>
                </button>
                <ul
                  className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                  data-te-sidenav-collapse-ref
                >
                  {item.subItems &&
                    item.subItems.map((subItem, iz) => (
                      <li key={subItem.index} className="relative">
                        <button
                          className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-2 pl-[2.4rem] pr-4 text-[0.8rem] 
                        text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit 
                        hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 
                        active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                        motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                          data-te-sidenav-link-ref
                        >
                          Link 2
                        </button>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        ))}
        {/* <hr className="my-4" /> */}
      </nav>
    </div>
  );
}

export default PanelSearchOld;
