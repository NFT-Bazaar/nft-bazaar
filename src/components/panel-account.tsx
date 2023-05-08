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
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";

type Item = {
  index: number;
  text?: string;
  image?: string;
  account: string;
};

type MyProps = {
  isOpen: boolean;
};

function PanelAccount({ isOpen }: MyProps) {
  const wallets = [
    { name: "metamask", image: "/static/images/metamask.svg", account: "" },
    { name: "keplr", image: "/static/images/keplr.svg", account: "" },
    {
      name: "trustwallet",
      image: "/static/images/trustwallet.svg",
      account: "",
    },
    { name: "coinbase", image: "/static/images/coinbase.svg", account: "" },
  ];
  const items: Item[] = [
    {
      text: "account 1",
      index: 1,
      image: "/static/images/metamask.svg",
      account: "0xC5331Cc3BBE5A060de7d851fF33c2c5f1b611F16",
    },
    {
      text: "account 2",
      index: 2,
      image: "/static/images/metamask.svg",
      account: "0xCDB1af9f423E438694e9F8f447aa35b3fDe2DD81",
    },
    {
      text: "account 3",
      index: 3,
      image: "/static/images/metamask.svg",
      account: "0x82455a57FaB9b75c84bF8Daef352d9EfFF44f93f",
    },
    {
      text: "account 4",
      index: 4,
      image: "/static/images/keplr.svg",
      account: "0xCDB1af9f423E438694e9F8f447aa35b3fDe2DD81",
    },
  ];

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // useEffect(() => {
  //   if (isClient) {
  //     //initTE({ Sidenav });
  //   }
  // }, [isClient]);

  return (
    <div
      className={
        (isOpen ? "w-60 transition" : "w-0 transition") +
        " border-r-2 border-gray-200 text-gray-500"
      }
    >
      <div className="flex space-x-4 border-b-2 border-gray-200 h-12 place-content-center">
        {wallets.map((x, index) => (
          <Image
            className="cursor-pointer"
            key={x.name}
            src={x.image}
            alt="NFT Bazaar"
            width={30}
            height={30}
          ></Image>
        ))}
      </div>
      <nav id="panel2" className="z-[1035] h-screen w-60 pt-2">
        <ul className="relative m-0 list-none" data-te-sidenav-menu-ref>
          {items.map((item: Item) => (
            <li key={item.index} className="flex flex-row relative">
              <button
                className="flex flex-auto h-10 cursor-pointer items-center truncate rounded-[5px] px-4 py-2 text-[0.8rem] text-gray-500 
                 hover:bg-slate-50 hover:text-inherit hover:outline-none"
                data-te-sidenav-link-ref
              >
                {item.image && (
                  <div className="mr-[0.8rem] h-6 w-6 relative">
                    <Image
                      src={item.image}
                      className="relative select-none"
                      alt="NFT Bazaar"
                      fill
                    ></Image>
                  </div>
                )}
                <span className="font-medium text-gray-500">
                  {item.account.slice(0, 8) + " ... " + item.account.slice(-6)}
                </span>
              </button>
              <Icon
                icon="ph:copy-light"
                className="self-center text-gray-800 cursor-pointer px-4"
              />
              {/* <FontAwesomeIcon
                icon={faCopy}
                className="self-center text-gray-800 cursor-pointer px-4"
              /> */}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PanelAccount;
