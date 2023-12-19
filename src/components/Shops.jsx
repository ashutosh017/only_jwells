import React from "react";

function Shops() {
  return (
    <div>
      <h1 className="text-red-950 text-center text-xl my-4">Our Shops</h1>
      <div className="shops flex gap-x-4 justify-center flex-wrap mb-24">
        <div className="shop text-center border p-4 m-1 border-purple-50 bg-purple-50 ">
          <h1>Shop 1</h1>
          <h2>Kolkata</h2>
          <p>call us: +91 12341231</p>
        </div>
        <div className="shop text-center border p-4 m-1 border-purple-50 bg-purple-50">
          <h1>Shop 2</h1>
          <h2>Kolkata</h2>
          <p>call us: +91 12341232</p>
        </div>
        <div className="shop text-center border p-4 m-1 border-purple-50 bg-purple-50">
          <h1>Shop 3</h1>
          <h2>Kolkata</h2>
          <p>call us: +91 12341233</p>
        </div>
        <div className="shop text-center border p-4 m-1 border-purple-50 bg-purple-50">
          <h1>Shop 4</h1>
          <h2>Delhi</h2>
          <p>call us: +91 12341234</p>
        </div>
      </div>
    </div>
  );
}

export default Shops;
