import React from "react";
import { CaretDoubleRight } from "phosphor-react";
const Shop = () => {
  return (
    <section className="shop">
      <div className="page-title py-3 bg-gray-300">
        <div className="container flex items-center justify-between">
          <h1 className=" uppercase text-sm">Shop</h1>
          <h1 className=" uppercase flex text-sm items-center justify-between gap-1">
            Home <CaretDoubleRight size={20} color="#ffffff" />
            Shop
          </h1>
        </div>
      </div>
      <div className="product-area">
        <div className="container">
          <div className="grid grid-cols-1 mt-5 lg:grid-cols-4 gap-5">
            <div className="p-5 bg-orange-500 w-full lg:col-span-1">
              Row One
            </div>
            <div className="p-5 bg-orange-500 lg:col-span-3 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="product p-5 bg-orange-500 border">Product</div>
                <div className="product p-5 bg-orange-500 border">Product</div>
                <div className="product p-5 bg-orange-500 border">Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
