import react, { useState, useEffect, useRef, useContext, useId } from "react";

import Tabs from "./tabs";
import CardDetail, { CardDetailProps } from "./card-detail";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";
import Card5 from "./card5";
import Card6 from "./card6";
import CardDetail2 from "./card-detail1";

const card: CardDetailProps = {
  title: "FirstNFT",
  subTitle: "the first nft for test",
  caption: "Super!",
  titlePrice: "ETH",
  price: "12",
  cardClassName: "",
  imageSource: "/static/images/nft2.png",
};

function Content({}) {
  return (
    <div className="px-0 py-0 text-gray-500 bg-gray-200 h-screen w-screen">
      <Tabs></Tabs>
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
  );
}

export default Content;
