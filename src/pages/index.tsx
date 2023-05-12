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
import Sidebar2 from "../components/sidebar2";
import PanelAccount from "../components/panel-account";
import PanelSearch from "../components/panel-search";
import Content from "../components/content";
import Footer from "../components/footer";

import { MainContextProvider } from "../context/main-context";

import { cookies } from "next/headers";

export default function Home() {
  // function Cookie() {
  //   const cookieStore = cookies();
  //   const theme = cookieStore.get("theme");
  // }
  // Cookie();

  const [tabs, setTabs] = useState(null);
  return (
    <MainContextProvider>
      <main className="min-h-screen flex flex-col">
        <Header2></Header2>
        <div className="flex flex-col md:flex-row flex-1">
          {/* flex flex-row h-screen" */}
          <Sidebar2></Sidebar2>
          <PanelAccount isOpen={false}></PanelAccount>
          <PanelSearch isOpen={false}></PanelSearch>
          <Content></Content>
        </div>
        <Footer></Footer>
      </main>
    </MainContextProvider>
  );
}
