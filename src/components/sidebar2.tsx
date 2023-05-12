import react, { useState, useEffect, useRef, useContext, useId } from "react";
import Link from "next/link";
import Image from "next/image";
import { toggleWallet } from "./panel-account";
import { toggleSearch } from "./panel-search";
import { toggleExchange } from "./panel-exchange";
import PanelSearch from "./panel-search";

// import LockedWallet from "./svgs/locked-wallet";
var sidebarId: string;

type sideNav = {
  image: string;
  toggle: any;
};

function Sidebar2(props: {}) {
  const logo1 = "/static/images/logo1.png";
  const navs: sideNav[] = [
    { image: "/static/images/locked-wallet.svg", toggle: toggleWallet },
    { image: "/static/images/air-search.svg", toggle: toggleSearch },
    { image: "/static/images/exchange.svg", toggle: toggleExchange },
  ];

  sidebarId = useId();

  const rootRef = useRef(null);

  // useEffect(() => {
  //   setIsOpenSearch(!isOpenSearch);
  //   setIsOpenWallet(false);
  //   setIsOpenExchange(false);
  // }, [isOpenSearch]);
  // useEffect(() => {
  //   setIsOpenWallet(!isOpenWallet);
  //   setIsOpenSearch(false);
  //   setIsOpenExchange(false);
  // }, [isOpenWallet]);
  // useEffect(() => {
  //   setIsOpenExchange(!isOpenExchange);
  //   setIsOpenSearch(false);
  //   setIsOpenWallet(false);
  // }, [isOpenExchange]);

  return (
    <div className="flex flex-row">
      <nav
        id={sidebarId}
        className="bg-gray-60 w-16 flex flex-col p-2 h-[calc(100vh)] left-0 border-gray-200 bg-gray-200"
        // style={{ backgroundColor: "#C2C238" }}
      >
        <div className="mt-8 w-12">
          <ul className="place-self-center">
            {navs.map(function (nav, index) {
              return (
                <li
                  key={index}
                  className="mt-3 mb-2 pt-3 transition duration-150 ease-in-out cursor-pointer hover:bg-gray-400 hover:rounded-md"
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
                      onClick={() => handlePanels(nav.toggle)}
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

  function handlePanels(toggle: any) {
    if (toggle != toggleWallet) toggleWallet(false);
    if (toggle != toggleSearch) toggleSearch(false);
    if (toggle != toggleExchange) toggleExchange(false);

    toggle();
  }
}

export default Sidebar2;
