import React, { useState } from "react";
import Hashes from "jshashes";

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
  ExchangeContext,
  ExchangeContextType,
  initialStateExchange,
} from "../components/panel-exchange";
import {
  TabContext,
  TabContextType,
  initialStateTab,
} from "../components/tab-bar";
import {
  CardContainerContext,
  CardContainerContextType,
  initialStateCardContainer,
} from "../components/card-container";
import {
  CardGridContext,
  CardGridContextType,
  initialStateCardGrid,
} from "../components/card-grid";

//----------------------------------------------------

const Methods = {};
var Events = {};

export function setMethodsEvents(component, methods) {
  Methods[component] = methods;
  return Events[component];
}

//----------------------------------------------------

export const MainContextProvider = ({ children }) => {
  Events = {
    side: callbackSide,
    account: callbackAccount,
    search: callbackSearch,
    exchange: callbackExchange,
    tab: callbackTab,
  };

  //----------------------------------------------------

  const [stateSide, setStateSide] = useState({
    items: initialStateSide(),
  });
  function callbackSide({ action, side }) {
    if ((action = "click")) {
      switch (side.name) {
        case "wallet":
          var newState = { ...stateAccount, isOpen: !stateAccount.isOpen };
          setStateAccount(newState);
          if (stateSearch.isOpen) {
            newState = { ...stateSearch, isOpen: false };
            setStateSearch(newState);
          }
          if (stateExchange.isOpen) {
            newState = { ...stateExchange, isOpen: false };
            setStateExchange(newState);
          }
          break;
        case "search":
          var newState = { ...stateSearch, isOpen: !stateSearch.isOpen };
          setStateSearch(newState);
          if (stateAccount.isOpen) {
            newState = { ...stateAccount, isOpen: false };
            setStateAccount(newState);
          }
          if (stateExchange.isOpen) {
            newState = { ...stateExchange, isOpen: false };
            setStateExchange(newState);
          }
          break;
        case "exchange":
          var newState = { ...stateExchange, isOpen: !stateExchange.isOpen };
          setStateExchange(newState);
          if (stateAccount.isOpen) {
            newState = { ...stateAccount, isOpen: false };
            setStateAccount(newState);
          }
          if (stateSearch.isOpen) {
            newState = { ...stateSearch, isOpen: false };
            setStateSearch(newState);
          }
          break;
        default:
          break;
      }
    }
    console.log(side);
  }

  //----------------------------------------------------

  const [stateAccount, setStateAccount] = useState({
    isOpen: false,
    items: initialStateAccount(),
  });
  function callbackAccount({ action, nftList }) {
    if ((action = "click")) {
      var tab = stateTab.items.find((x, index) => x.key == "MyProfile");
      if (tab == undefined) {
        addTab0();
        addCardContainer0(nftList);
      } else {
        Methods["tab"]({ action: "focus", index: 0 });
        Methods["cardContainer"]({ action: "focus", index: 0 });
      }
    }
    console.log(action);
  }

  function addTab0() {
    var tab = { key: "MyProfile", text: "Profile", count: 0 };
    var tabs = {
      items: [...[tab].flat(), ...stateTab.items],
      action: stateTab.action,
    };
    Methods["tab"]({ action: "update", tabs, index: 0 });
  }
  function addCardContainer0(nftList) {
    var cardGrid = { key: "MyProfile", searchString: "", nftList: nftList };
    var cardContainer = {
      items: [...[cardGrid].flat(), ...stateCardContainer.items],
      action: stateCardContainer.action,
    };
    Methods["cardContainer"]({ action: "update", cardContainer, index: 0 });
  }

  //----------------------------------------------------

  const [stateSearch, setStateSearch] = useState({
    isOpen: false,
    items: initialStateSearch(),
  });
  function callbackSearch({ action, searchString, nftList }) {
    if ((action = "click")) {
      var MD5 = new Hashes.MD5();
      var key = MD5.hex(searchString);
      var tab = stateTab.items.find((x, index) => x.key == key);
      if (tab == undefined) {
        var index = stateTab.items.length;
        addTab({ index, key });
        addCardContainer({ index, key, searchString, nftList });
      } else {
        Methods["tab"]({ action: "focus", index });
        Methods["cardContainer"]({ action: "focus", index });
      }
    }
    console.log(searchString);
  }
  function addTab({ index, key }) {
    var tab = { key: key, text: `Search ${index}`, count: 0 };
    var tabs = {
      items: [...stateTab.items, ...[tab].flat()],
      action: stateTab.action,
    };
    Methods["tab"]({ action: "update", tabs, index });
  }
  function addCardContainer({ index, key, searchString, nftList }) {
    var cardGrid = { key: key, searchString: searchString, nftList: nftList };
    var cardContainer = {
      items: [...stateCardContainer.items, ...[cardGrid].flat()],
      action: stateCardContainer.action,
    };
    Methods["cardContainer"]({ action: "update", cardContainer, index });
  }

  //----------------------------------------------------

  const [stateExchange, setStateExchange] = useState({
    isOpen: false,
    items: initialStateExchange(),
  });
  function callbackExchange({ action, index }) {}

  //----------------------------------------------------

  const [stateTab, setStateTab] = useState({
    items: initialStateTab(),
  });
  function callbackTab({ action, index }) {
    if ((action = "remove")) {
      Methods["cardContainer"]({ action: "remove", index });
    }
  }

  //----------------------------------------------------

  const [stateCardContainer, setStateCardContainer] = useState({
    items: initialStateCardContainer(),
  });

  //----------------------------------------------------

  const [stateCardGrid, setStateCardGrid] = useState({
    items: initialStateCardGrid(),
  });

  //----------------------------------------------------

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
  const contextValueExchange = {
    stateExchange,
    setStateExchange,
  };
  const contextValueTab = {
    stateTab,
    setStateTab,
  };
  const contextValueCardContainer = {
    stateCardContainer,
    setStateCardContainer,
  };
  const contextValueCardGrid = {
    stateCardGrid,
    setStateCardGrid,
  };

  return (
    <SideContext.Provider value={contextValueSide}>
      <AccountContext.Provider value={contextValueAccount}>
        <SearchContext.Provider value={contextValueSearch}>
          <ExchangeContext.Provider value={contextValueExchange}>
            <TabContext.Provider value={contextValueTab}>
              <CardContainerContext.Provider value={contextValueCardContainer}>
                <CardGridContext.Provider value={contextValueCardGrid}>
                  {children}
                </CardGridContext.Provider>
              </CardContainerContext.Provider>
            </TabContext.Provider>
          </ExchangeContext.Provider>
        </SearchContext.Provider>
      </AccountContext.Provider>
    </SideContext.Provider>
  );
};
