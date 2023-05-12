import React, { useState, createContext, useEffect } from "react";

// import {
//   stateTypeSidebar,
//   setStateTypeSidebar,
// } from "../components/panel-wallet";
// import {
//   stateTypeWallet,
//   setStateTypeWallet,
// } from "../components/panel-wallet";
// import {
//   stateTypeSearch,
//   setStateTypeSearch,
// } from "../components/panel-search";
import {
  TabContext,
  TabContextType,
  initialStateTab,
} from "../components/tabs";
import {
  AccountContext,
  AccountContextType,
  initialStateAccount,
} from "../components/panel-account";

export const MainContextProvider = ({ children }) => {
  const [stateAccount, setStateAccount] = useState({
    items: initialStateAccount(),
    action: clickAccount,
  });
  const [stateTab, setStateTab] = useState({
    items: initialStateTab(),
    action: clickTab,
  });

  const [stateSidebar, setStateSidebar] = useState(null);
  const [stateSearch, setStateSearch] = useState(null);
  const [stateExchange, setStateExchange] = useState(null);

  function clickTab(action, item) {
    var a = 0;
    console.log(item);
  }

  function clickAccount(action, item) {
    var a = 0;
    console.log(item);
  }

  function setSystemState(newState) {}

  // const contextValue = { transmitter, receiver, action, value };
  // const contextValueSidebar = {
  //   sidebarState,
  //   setSidebarState,
  // };
  const contextValueAccount = {
    stateAccount,
    setStateAccount,
  };
  // const contextValueSearch = {
  //   searchState,
  //   setSearchState,
  // };
  const contextValueTab = {
    stateTab,
    setStateTab,
  };
  // const contextValueExchange = {
  //   exchangeState,
  //   setExchangeState,
  // };
  // value={contextValueTab}
  return (
    <AccountContext.Provider value={contextValueAccount}>
      <TabContext.Provider value={contextValueTab}>
        {children}
      </TabContext.Provider>
    </AccountContext.Provider>
  );
};
