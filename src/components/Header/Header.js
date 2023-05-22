import { faCartShopping, faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import Logo from "../../img/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const state = useSelector((state) => state.cartItems);
// --------N-------
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
  }, []);
  // #f5e6e0
  return (
    // ---------N--------
    <div
      className={`${
        isActive ? "bg-slate-50 shadow-md py-2" : "bg-none py-3"
      } lg:max-2xl:fixed w-full z-10 transition-all`}
    >
      <div className="grid grid-cols-2">
        <Link to="products">
          <FontAwesomeIcon icon={faShirt} className="text-2xl" />
          {/* <img className="text-xs" src={Logo} /> */}
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
