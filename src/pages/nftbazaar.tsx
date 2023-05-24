import React from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from "../components/header";
import Sidebar from "../components/side-bar";
import PanelAccount from "../components/panel-account";
import PanelSearch from "../components/panel-search";
import PanelExchange from "../components/panel-exchange";
import CardContainer from "../components/card-container";
import Footer from "../components/footer";

import { MainContextProvider, setMethodsEvents } from "../context/main-context";

import { cookies } from "next/headers";

export default function Home() {
  // function Cookie() {
  //   const cookieStore = cookies();
  //   const theme = cookieStore.get("theme");
  // }
  // Cookie();

  return (
    <MainContextProvider>
      <>
        <Header setMethodsEvents={setMethodsEvents}></Header>
        <main className="min-h-screen flex flex-col top-16 overflow-x-hidden">
          <div className="flex flex-col md:flex-row flex-1mb-auto pb-28">
            <Sidebar setMethodsEvents={setMethodsEvents}></Sidebar>
            <PanelAccount setMethodsEvents={setMethodsEvents}></PanelAccount>
            <PanelSearch setMethodsEvents={setMethodsEvents}></PanelSearch>
            <PanelExchange setMethodsEvents={setMethodsEvents}></PanelExchange>
            <CardContainer setMethodsEvents={setMethodsEvents}></CardContainer>
          </div>
          <Footer></Footer>
        </main>
      </>
    </MainContextProvider>
  );
}
