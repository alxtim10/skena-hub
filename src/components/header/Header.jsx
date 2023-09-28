import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import { UserContext } from "../../contexts/user.context";

function Header() {
  // const goToCart = () => {};

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
    setCurrentUser(null);
  };
  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-outfit mt-2 ml-5">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="w-16 md:w-[70px] cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex justify-center font-outfit mr-5 md:m-5 ">
          <ul className="flex flex-col justify-center items-end gap-1">
            {currentUser ? (
              <li
                onClick={handleSignOut}
                className="p-1 text-xs md:text-sm font-bold cursor-pointer hover:text-blue-700 hover:-translate-x-2 hover:translate-y-2 transition-all duration-100"
              >
                SIGN OUT
              </li>
            ) : (
              <li
                onClick={handleSignIn}
                className="p-1 text-xs md:text-sm font-bold cursor-pointer hover:text-blue-700 hover:-translate-x-2 hover:translate-y-2 transition-all duration-100"
              >
                SIGN IN
              </li>
            )}
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
