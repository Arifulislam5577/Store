import React from "react";
import { Link } from "react-router-dom";

import { CaretDoubleRight, SquaresFour } from "phosphor-react";
const Shop = () => {
  return (
    <section className="shop">
      <div className="page-title text-gray-50 py-3 bg-gray-900">
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
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-4 items-center justify-between my-5  ">
            <div className="lg:col-span-1 w-full bg-gray-300 p-3">
              <h2 className="text-gray-500 font-medium text-sm">
                Filter Product By
              </h2>
            </div>
            <div className="lg:col-span-3 w-full bg-gray-300 p-2">
              <div className="flex items-center justify-between">
                <div>
                  <SquaresFour size={16} color="#444" />
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <p className="text-gray-500 font-medium text-sm">Sort By</p>
                  <select className="p-1 px-5 text-sm">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-5 lg:grid-cols-4 gap-5">
            <div className="w-full lg:col-span-1 border-2 p-3">
              <div className="category  mb-5">
                <h2 className="text-gray-500 my-3 font-medium ">Category</h2>
                <ul className="flex flex-col gap-2 capitalize text-sm text-gray-600">
                  <li>
                    <Link to="#" className="hover:text-gray-800 transition">
                      Men's
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-800 transition">
                      Women's
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-800 transition">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-800 transition">
                      bags
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-800 transition">
                      jewelery
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-gray-800 transition">
                      shoes
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="rating">
                <h2 className="text-gray-500 my-3 font-medium ">Rating</h2>
              </div>
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
