import React from "react";
import { User, Heart, HandbagSimple, AppStoreLogo } from "phosphor-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" py-3  shadow">
      <div className="lg:container">
        <div className="flex justify-between items-center">
          <div className="logo-box">
            <Link
              to="/"
              className=" block border p-1 rounded-full border-yellow-500"
            >
              <AppStoreLogo size={32} color="#f0b000" />
            </Link>
          </div>

          <ul className="flex justify-between items-center gap-5">
            <li>
              <Link to="#">
                <User size={24} color="#000000" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <Heart size={24} color="#000000" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <HandbagSimple size={24} color="#000000" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
