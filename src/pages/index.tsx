import React, { useState, createContext, useEffect, useContext } from "react";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import alchemy1 from "../scripts/alchemy1.js";
import alchemy2 from "../scripts/alchemy2.js";
import alchemyAxelar from "../scripts/alchemyAxelar.js";
// import connetMetamask from "../scripts/metamask.js";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header2 from "../components/header2";
import Side from "../components/side-bar";
import PanelAccount from "../components/panel-account";
import PanelSearch from "../components/panel-search";
import Content from "../components/content";
import Footer from "../components/footer";

import { SideContext } from "../components/side-bar";
import { AccountContext } from "../components/panel-account";
import { SearchContext } from "../components/panel-search";
import { TabContext } from "../components/tab-bar";

import {
  MainContextProvider,
  callbackForMethod,
  // sideCallback,
  // accountCallback,
  // searchCallback,
} from "../context/main-context";

import { cookies } from "next/headers";

export default function Home() {
  // function Cookie() {
  //   const cookieStore = cookies();
  //   const theme = cookieStore.get("theme");
  // }
  // Cookie();

  return (
    <MainContextProvider>
      <main className="min-h-screen flex flex-col">
        <Header2 callbackForMethod={callbackForMethod}></Header2>
        <div className="flex flex-col md:flex-row flex-1">
          {/* <SideContext.Provider value={contextValueSide}> */}
          <Side
            // callback={callback}
            callbackForMethod={callbackForMethod}
          ></Side>
          {/* </SideContext.Provider> */}
          {/* <AccountContext.Provider value={contextValueAccount}> */}
          <PanelAccount callbackForMethod={callbackForMethod}></PanelAccount>
          {/* </AccountContext.Provider> */}
          <PanelSearch callbackForMethod={callbackForMethod}></PanelSearch>
          <Content></Content>
        </div>
        <Footer></Footer>
      </main>
    </MainContextProvider>
  );
}
