import react, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PanelAccount from "./panel-account";
import PanelSearch from "./panel-search";

// import LockedWallet from "./svgs/locked-wallet";

function Sidebar2(props: {}) {
  const logo1 = "/static/images/logo1.png";
  const navs = [
    { image: "/static/images/air-search.svg", toggle: "setIsOpenSearch" },
    { image: "/static/images/locked-wallet.svg", toggle: "setIsOpenWallet" },
    { image: "/static/images/exchange.svg", toggle: "setIsOpenExchange" },
  ];

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenWallet, setIsOpenWallet] = useState(false);
  const [isOpenExchange, setIsOpenExchange] = useState(false);

  useEffect(() => {
    setIsOpenSearch(!isOpenSearch);
    setIsOpenWallet(false);
    setIsOpenExchange(false);
  }, [isOpenSearch]);
  useEffect(() => {
    setIsOpenWallet(!isOpenWallet);
    setIsOpenSearch(false);
    setIsOpenExchange(false);
  }, [isOpenWallet]);
  useEffect(() => {
    setIsOpenExchange(!isOpenExchange);
    setIsOpenSearch(false);
    setIsOpenWallet(false);
  }, [isOpenExchange]);

  return (
    <div className="flex flex-row">
      <nav
        id="sidebar2"
        className="bg-gray-60 w-16 flex flex-col p-2 h-[calc(100vh)] left-0 border-gray-800 bg-gray-500"
        // style={{ backgroundColor: "#C2C238" }}
      >
        <div className="mt-8 w-12">
          <ul className="place-self-center">
            {navs.map(function (nav, index) {
              return (
                <li
                  onClick={nav.toggle}
                  key={index}
                  className="mt-4 mb-2 transition duration-150 ease-in-out cursor-pointer"
                  data-te-sidenav-toggle-ref
                  data-te-target="#panel2"
                  aria-controls="#panel2"
                  aria-haspopup="true"
                >
                  <div className="h-10 relative">
                    <Image
                      src={nav.image}
                      className="rounded-full mx-auto"
                      alt="NFT Bazaar"
                      fill
                    ></Image>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* <PanelAccount isOpen={isOpenWallet}></PanelAccount>
      <PanelSearch isOpen={false}></PanelSearch> */}
    </div>
  );
}

export default Sidebar2;
