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
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";

import connectKeplr from "../scripts/keplr";
import connectMetamask from "../scripts/metamask";
import { Vampiro_One } from "next/font/google";

const metamaskImage: string = "/static/images/metamask.svg";
const keplrImage: string = "/static/images/keplr.svg";

var panelAccountId: string;

type MyProps = {
  isOpen?: boolean;
};
interface Wallet {
  name: string;
  image: string;
  account: string;
}
export type Account = {
  key: string;
  text?: string;
  image: string;
  account: string;
};
export type AccountA = {
  items: Account[];
  action: (action: string, account: Account) => any;
};
export type AccountContextType = {
  stateAccount: AccountA;
  setStateAccount: (accounts: Account[]) => void;
};
export const AccountContext = createContext(null);

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

export function initialStateAccount(): Account[] {
  return [
    {
      key: "1",
      text: "account 1",
      image: "/static/images/metamask.svg",
      account: "0xC5331Cc3BBE5A060de7d851fF33c2c5f1b611F16",
    },
    {
      key: "2",
      text: "account 2",
      image: "/static/images/metamask.svg",
      account: "0xCDB1af9f423E438694e9F8f447aa35b3fDe2DD81",
    },
    {
      key: "3",
      text: "account 3",
      image: "/static/images/metamask.svg",
      account: "0x82455a57FaB9b75c84bF8Daef352d9EfFF44f93f",
    },
    {
      key: "4",
      text: "account 4",
      image: "/static/images/keplr.svg",
      account: "0xCDB1af9f423E438694e9F8f447aa35b3fDe2DD81",
    },
  ];
}

function PanelAccount(props: MyProps) {
  const { stateAccount, setStateAccount } = useContext(
    AccountContext
  ) as AccountContextType;

  panelAccountId = useId();

  return (
    <div
      id={panelAccountId}
      className="border-r-2 border-gray-200 text-gray-500 rounded-tr w-0"
      style={{ transition: "width 0.5s" }}
    >
      <div className="flex space-x-4 border-b-2 p-2 border-gray-200 h-16 place-content-center bg-gray-200 rounded-tr overflow-x-hidden whitespace-nowrap">
        {wallets.map((x, index) => (
          <div
            key={x.name}
            className="hover:bg-gray-400 hover:rounded p-2 whitespace-nowrap"
          >
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
      <nav className="z-[1035] h-screen w-70 pt-2">
        <ul className="relative m-0 list-none" data-te-sidenav-menu-ref>
          {[stateAccount.items].flat().map((account: Account) => (
            <li key={account.account} className="flex flex-row relative">
              <button
                className="flex flex-auto h-10 cursor-pointer items-center truncate rounded-[5px] px-4 py-2 text-[0.8rem] text-gray-500 
                hover:bg-slate-50 hover:text-inherit hover:outline-none"
                data-te-sidenav-link-ref
                onClick={() => stateAccount.action("click", account)}
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

  async function connectWallet(wallet: string) {
    var newAddresses: string[] = [];
    var newAccounts: Wallet[] = [];
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

export function toggleAccount(toggle?: boolean) {
  // if (rootRef.current) {
  // }
  var tag = document.getElementById(panelAccountId);
  if (!tag) return;

  var isOpen = true;
  if (tag.classList.contains("w-0")) isOpen = false;
  if (toggle === false || isOpen) {
    tag.classList.add("w-0");
    tag.classList.remove("w-1/4");
  } else {
    tag.classList.add("w-1/4");
    tag.classList.remove("w-0");
  }
}

export default PanelAccount;
