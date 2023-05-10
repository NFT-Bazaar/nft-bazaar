import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import alchemy1 from "../scripts/alchemy1.js";
import alchemy2 from "../scripts/alchemy2.js";
import alchemyAxelar from "../scripts/alchemyAxelar.js";
// import connetMetamask from "../scripts/metamask.js";

import CardDetail, { CardDetailProps } from "../components/card-detail";
import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Card3 from "../components/card3";
import Card4 from "../components/card4";
import Card5 from "../components/card5";
import Card6 from "../components/card6";
import Footer from "../components/footer";
import CardDetail2 from "../components/card-detail1";
import Sidebar2 from "../components/sidebar2";
import Header2 from "../components/header2";
import PanelAccount from "../components/panel-account";
import PanelSearch from "../components/panel-search";
import TabBarSearch from "../components/tabbar-search";
import Tabs from "../components/tabs";

export default function Home() {
  const card: CardDetailProps = {
    title: "FirstNFT",
    subTitle: "the first nft for test",
    caption: "Super!",
    titlePrice: "ETH",
    price: "12",
    cardClassName: "",
    imageSource: "/static/images/nft2.png",
  };

  return (
    <div>
      <Header2></Header2>
      <main>
        <div className="flex flex-row h-screen">
          <Sidebar2></Sidebar2>
          <PanelAccount isOpen={true}></PanelAccount>
          <PanelSearch isOpen={true}></PanelSearch>

          <div className="px-0 py-0 text-gray-500 bg-gray-200 h-screen w-screen">
            {/* <TabBarSearch></TabBarSearch> */}
            <Tabs id="search-bar"></Tabs>
            <CardDetail {...card}></CardDetail>
            <Card1></Card1>
            <Card2></Card2>
            <Card3></Card3>
            <Card4></Card4>
            <Card5></Card5>
            <Card6></Card6>
            <CardDetail2></CardDetail2>
            {/* <div className="c2">
              <button className="b1" onClick={alchemy1}>
                Alchemy1
              </button>
              <br />
              <button className="b2" onClick={alchemy2}>
                Alchemy2
              </button>
            </div>
            <button className="b3" onClick={alchemyAxelar}>
              alchemyAxelar
            </button>
            <button className="b4">alchemyAxelar2</button>
            <button className="b5">alchemyAxelar3</button> */}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
