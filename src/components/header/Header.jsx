import React from "react";
import logo from "../../assets/logo.svg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function Header() {
  // const goToCart = () => {};

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-outfit mt-2 ml-5">
          <Link to="/">
            <img src={logo} alt="" className="w-16 md:w-[70px] cursor-pointer" />
          </Link>
        </div>
        <div className="flex justify-center font-outfit mr-5 md:m-5 ">
          <ul className="flex flex-col justify-center items-end gap-1">
            <li className="p-1 text-xs md:text-sm font-bold cursor-pointer hover:text-blue-700 hover:-translate-x-2 hover:translate-y-2 transition-all duration-100">
              ACCOUNT
            </li>
            <Link to="/cart">
              <li className="p-1 text-xs md:text-sm font-bold cursor-pointer hover:text-blue-700 hover:-translate-x-2 hover:translate-y-2 transition-all duration-100">
                CART
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
