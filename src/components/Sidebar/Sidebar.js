import {
  faArrowLeft,
  faMinus,
  faPlus,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../action";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const state = useSelector((state) => state.cartItems);

  const [sum, setSum] = useState(0);
  const calcTotal = () => {
    const sum = state.reduce((acc, current) => {
      return acc + current.price * current.qty;
    }, 0);
    setSum(sum);
  };
  useEffect(() => {
    calcTotal();
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`fixed shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px] w-full bg-white top-0 h-full md:w-[35vw] xl:max-w-[30vw] overflow-y-scroll ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex justify-between py-2 border-b">
        <p className="uppercase text-sm font-semibold">
          Shopping Bag ({state.length})
        </p>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="pt-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>

      {state.map((item) => {
        return (
          <div className="grid grid-cols-1 items-center justify-center relative border-b my-4 rounded-md pb-2 uppercase">
            <div className="absolute top-2 p-2 left-[90%] cursor-pointer">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => dispatch(removeCart(item))}
                className="hover:text-red-700"
              />
            </div>
            <div className="w-28 mx-auto my-3">
              <img src={item.image} />
            </div>
            <div>
              <p
                className="font-medium text-sm hover:underline cursor-pointer"
                onClick={() => (
                  navigate(`/products/${item.id}`), setIsOpen(false)
                )}
              >
                {item.title}
              </p>
              <div className="grid grid-cols-3">
                <p className="font-medium">
                  Total:
                  <span className="text-green-800">
                    ${item.price * item.qty}
                  </span>
                </p>
                <p className="text-gray-500">${item.price}</p>
                <div>
                  <span onMouseDown={() => dispatch(removeCart(item))}>
                    <FontAwesomeIcon icon={faMinus} className="mx-2" />
                  </span>
                  {item.qty}
                  <span>
                    <FontAwesomeIcon
                      icon={faPlus}
                      onMouseDown={() => dispatch(addCart(item))}
                      className="mx-2"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="grid grid-cols-2 uppercase font-medium">
        <p className="text-sm">Total Price:${sum}</p>
        <p onClick={() => dispatch({ type: "clearCart" })}>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-red-800 cursor-pointer"
          />
        </p>
      </div>
      <div className="flex flex-col">
        <Link to="/" className="bg-gray-300 my-2 p-1 rounded-lg font-semibold">View Cart</Link>
        <Link to="/" className="bg-slate-800 text-white my-2 p-1 rounded-lg font-semibold">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
// fixed shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px] w-full bg-white top-0 h-full md:w-[35vw] xl:max-w-[30vw] ${isOpen ? "right-0" : "-right-full"}
// <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
// <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
