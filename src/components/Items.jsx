import React from "react";
import goldcoin from "../items/goldcoin.webp";
import earings from "../items/earings.jpg";
import chains from "../items/chains.webp";
import rings from "../items/rings.webp";
import bracelets from "../items/bracelets.webp";
import bangles from "../items/bangles.webp";
function Items() {
  return (
    <div>
      <h1 className="text-red-950 text-center text-xl my-4">
        Shop By Category
      </h1>
      <div className="items  flex justify-center bg-purple-50 pb-4 flex-wrap content-center">
        <div className="item text-center h-40 w-40 m-4">
          <img src={goldcoin} alt="item1" />
          <h2 className=" ">Gold Coin</h2>
        </div>
        <div className="item text-center h-40 w-40 m-4">
          <img src={earings} alt="item1" />
          <h2 className=" ">Earings</h2>
        </div>
        <div className="item text-center h-40 w-40 m-4">
          <img src={chains} alt="item1" />
          <h2 className=" ">Chains</h2>
        </div>
        <div className="item text-center h-40 w-40 m-4">
          <img src={rings} alt="item1" />
          <h2 className=" ">Rings</h2>
        </div>
        <div className="item text-center h-40 w-40 m-4">
          <img src={bracelets} alt="item1" />
          <h2 className=" ">Bracelets</h2>
        </div>
        <div className="item text-center h-40 w-40 m-4">
          <img src={bangles} alt="item1" />
          <h2 className=" ">Bangles</h2>
        </div>
      </div>
    </div>
  );
}

export default Items;
