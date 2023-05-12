import React, { useState, createContext, useEffect, useContext } from "react";

import Header2 from "../components/header2";
import Sidebar from "../components/side-bar";
import PanelAccount from "../components/panel-account";
import PanelSearch from "../components/panel-search";
import Content from "../components/content";
import Footer from "../components/footer";

import { stateTypeSide, setStateTypeSide } from "../components/side-bar";
import {
  stateTypeAccount,
  setStateTypeAccount,
} from "../components/panel-account";
import {
  stateTypeSearch,
  setStateTypeSearch,
} from "../components/panel-search";

import {
  SideContext,
  SideContextType,
  initialStateSide,
} from "../components/side-bar";
import {
  AccountContext,
  AccountContextType,
  initialStateAccount,
} from "../components/panel-account";
import {
  SearchContext,
  SearchContextType,
  initialStateSearch,
} from "../components/panel-search";
import {
  TabContext,
  TabContextType,
  initialStateTab,
} from "../components/tab-bar";

export const MainContextProvider = ({ children }) => {
  const [stateSide, setStateSide] = useState({
    items: initialStateSide(),
    action: clickSide,
  });
  function clickSide(action, item) {
    switch (item.name) {
      case "wallet":
        var newState = { ...stateAccount, isOpen: !stateAccount.isOpen };
        setStateAccount(newState);
        if (stateSearch.isOpen) {
          newState = { ...stateSearch, isOpen: false };
          setStateSearch(newState);
        }
        break;
      case "search":
        var newState = { ...stateSearch, isOpen: !stateSearch.isOpen };
        setStateSearch(newState);
        if (stateAccount.isOpen) {
          newState = { ...stateAccount, isOpen: false };
          setStateAccount(newState);
        }
        break;
    }
    console.log(item);
  }

  const [stateAccount, setStateAccount] = useState({
    isOpen: false,
    items: initialStateAccount(),
    action: clickAccount,
  });
  function clickAccount(action, item) {
    var a = 0;
    console.log(item);
  }

  const [stateSearch, setStateSearch] = useState({
    isOpen: false,
    items: initialStateSearch(),
    action: clickSearch,
  });
  function clickSearch(action, item) {
    var a = 0;
    console.log(item);
  }

  const [stateTab, setStateTab] = useState({
    items: initialStateTab(),
    action: clickTab,
  });
  function clickTab(action, item) {
    var a = 0;
    console.log(item);
  }

  const contextValueSide = {
    stateSide,
    setStateSide,
  };
  const contextValueAccount = {
    stateAccount,
    setStateAccount,
  };
  const contextValueSearch = {
    stateSearch,
    setStateSearch,
  };
  const contextValueTab = {
    stateTab,
    setStateTab,
  };

  //   return (
  //     <main className="min-h-screen flex flex-col">
  //       <SearchContext.Provider value={contextValueSearch}>
  //         {}
  //       </SearchContext.Provider>
  //       <contextValueTab.Provider value={contextValueTab}>
  //         {}
  //       </contextValueTab.Provider>

  //       <Header2></Header2>

  //       <div className="flex flex-col md:flex-row flex-1">
  //         <SideContext.Provider value={contextValueSide}>
  //           <Sidebar></Sidebar>
  //         </SideContext.Provider>
  //         <AccountContext.Provider value={contextValueAccount}>
  //           <PanelAccount></PanelAccount>
  //         </AccountContext.Provider>
  //         <PanelSearch></PanelSearch>
  //         <Content></Content>
  //       </div>
  //       <Footer></Footer>
  //     </main>
  //   );
  // };

  // const [stateExchange, setStateExchange] = useState({
  //   items: initialStateExchange(),
  //   action: clickExchange,
  // });
  // const contextValueExchange = {
  //   stateExchange,
  //   setStateExchange,
  // };
  // function clickExchange(action, item) {
  //   var a = 0;
  //   console.log(item);
  // }

  return (
    <SideContext.Provider value={contextValueSide}>
      <AccountContext.Provider value={contextValueAccount}>
        <SearchContext.Provider value={contextValueSearch}>
          <TabContext.Provider value={contextValueTab}>
            {children}
          </TabContext.Provider>
        </SearchContext.Provider>
      </AccountContext.Provider>
    </SideContext.Provider>
  );
};
