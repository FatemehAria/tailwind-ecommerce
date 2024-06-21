import { faCartShopping, faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import Logo from "../../img/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const state = useSelector((state) => state.cartItems);


  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
  }, []);


  return (
    <div
      className={`${
        isActive
          ? "bg-slate-50 shadow-md py-2 transition-all duration-300"
          : "bg-none py-3 transition-all duration-300"
      } w-full z-10 fixed top-0`}
    >
      <div className="flex flex-row justify-between items-center w-full px-[8%]">
        <Link to="/">
          <img className="text-xs w-10 h-10" src={Logo} alt="logo" />
        </Link>
        <div>
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-2xl"
          />
          <span className="text-xs absolute mt-2 bg-red-500 w-4 h-4 font-bold rounded-full">
            {state.length}
          </span>
        </div>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Header;
