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
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";

import connectKeplr from "../scripts/keplr";
import connectMetamask from "../scripts/metamask";
import { Vampiro_One } from "next/font/google";

import { ItemBar } from "./tabs";

import BarContext from "../context/bar-context";

import { useContext } from "react";

type Account = {
  text?: string;
  image: string;
  account: string;
};

type MyProps = {
  isOpen: boolean;
};
interface Wallet {
  name: string;
  image: string;
  account: string;
}

const metamaskImage: string = "/static/images/metamask.svg";
const keplrImage: string = "/static/images/keplr.svg";
const wallets: Wallet[] = [
  { name: "metamask", image: "/static/images/metamask.svg", account: "" },
  { name: "keplr", image: "/static/images/keplr.svg", account: "" },
  {
    name: "trustwallet",
    image: "/static/images/trustwallet.svg",
    account: "",
  },
  { name: "coinbase", image: "/static/images/coinbase.svg", account: "" },
];

function PanelAccount({ isOpen }: MyProps) {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const { bars, setBars } = useContext(BarContext);

  // const accounts: Account[] = [
  //   {
  //     text: "account 1",
  //     image: "/static/images/metamask.svg",
  //     account: "0xC5331Cc3BBE5A060de7d851fF33c2c5f1b611F16",
  //   },
  //   {
  //     text: "account 2",
  //     image: "/static/images/metamask.svg",
  //     account: "0xCDB1af9f423E438694e9F8f447aa35b3fDe2DD81",
  //   },
  //   {
  //     text: "account 3",
  //     image: "/static/images/metamask.svg",
  //     account: "0x82455a57FaB9b75c84bF8Daef352d9EfFF44f93f",
  //   },
  //   {
  //     text: "account 4",
  //     image: "/static/images/keplr.svg",
  //     account: "0xCDB1af9f423E438694e9F8f447aa35b3fDe2DD81",
  //   },
  // ];

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
        (isOpen ? "w-80 transition" : "w-0 transition") +
        " border-r-2 border-gray-200 text-gray-500 rounded-tr"
      }
    >
      <div className="flex space-x-4 border-b-2 p-2 border-gray-200 h-16 place-content-center bg-gray-200 rounded-tr">
        {wallets.map((x, index) => (
          <div key={x.name} className="hover:bg-gray-400 hover:rounded p-2">
            <Image
              className="cursor-pointer"
              key={x.name}
              src={x.image}
              alt="NFT Bazaar"
              width={30}
              height={30}
              onClick={async () => {
                await connectWallet(x.name);
              }}
            ></Image>
          </div>
        ))}
      </div>
      <nav id="panel2" className="z-[1035] h-screen w-80 pt-2">
        <ul className="relative m-0 list-none" data-te-sidenav-menu-ref>
          {accounts.map((account: Account) => (
            <li key={account.account} className="flex flex-row relative">
              <button
                className="flex flex-auto h-10 cursor-pointer items-center truncate rounded-[5px] px-4 py-2 text-[0.8rem] text-gray-500 
                 hover:bg-slate-50 hover:text-inherit hover:outline-none"
                data-te-sidenav-link-ref
                onClick={() =>
                  addTab({
                    text: ellipsisHash(account.account),
                    count: 0,
                    definition: "",
                  } as ItemBar)
                }
              >
                {account.image && (
                  <div className="mr-[0.8rem] h-6 w-6 relative">
                    <Image
                      src={account.image}
                      className="relative select-none"
                      alt="NFT Bazaar"
                      fill
                    ></Image>
                  </div>
                )}
                <span className="font-medium text-gray-500">
                  {ellipsisHash(account.account)}
                </span>
              </button>
              {/* <Icon
                icon="ph:copy-light"
                className="self-center text-gray-800 cursor-pointer px-4"
              /> */}
              <FontAwesomeIcon
                icon={faCopy}
                className="self-center text-gray-800 cursor-pointer px-4"
                onClick={() => navigator.clipboard.writeText(account.account)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="self-center text-gray-800 cursor-pointer px-4"
                onClick={() => removeAccount(account.account)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  function addTab(bar: ItemBar) {
    const newBars = Array.from(new Set([...bars, ...[bar].flat()]));
    setBars(newBars);
  }

  async function connectWallet(wallet: string) {
    var newAddresses: string[] = [];
    var newAccounts: Account[] = [];
    switch (wallet) {
      case "metamask":
        newAddresses = (await connectMetamask()) || [];
        newAccounts = [newAddresses].flat().map((address) => {
          return { account: address, image: metamaskImage, text: "" };
        });
        break;

      case "keplr":
        newAddresses = (await connectKeplr()) || [];
        newAccounts = [newAddresses].flat().map((address) => {
          return { account: address, image: keplrImage, text: "" };
        });
        break;

      default:
        break;
    }
    updateList(newAccounts);
  }

  function updateList(newAccounts: Account[]) {
    var data: Account[] = Array.from(new Set([...accounts, ...newAccounts]));

    const uniqueList: any = Array.from(
      new Set(data.map((obj) => obj.account))
    ).map((account) => {
      return data.find((obj) => obj.account === account);
    });
    setAccounts(uniqueList);
  }

  function ellipsisHash(hash: string) {
    return hash.slice(0, 8) + " ... " + hash.slice(-6);
  }

  function removeAccount(account: string) {
    var data: Account[] = accounts.filter((acc) => acc.account !== account);
    setAccounts(data);
  }
}

export default PanelAccount;
