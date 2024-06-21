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
import { addCart, clearCartItem, emptyCart, removeCart } from "../../action";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const state = useSelector((state) => state.cartItems);
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let total = state.reduce((acc, current) => {
      return acc + current.price * current.qty;
    }, 0);
    setSum(total);
  }, [state]);

  return (
    <div
      className={`fixed shadow-2xl z-20 px-4 lg:px-[35px] w-full bg-white top-0 h-full md:w-[35vw] xl:max-w-[30vw] overflow-y-scroll ${
        isOpen ? "left-0 transition-all duration-700" : "-left-full transition-all duration-700"
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
          <div
            className="grid grid-cols-1 items-center justify-center relative border-b my-4 rounded-md pb-2"
            key={item.id}
          >
            <div className="absolute top-2 p-2 left-[90%] cursor-pointer">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => dispatch(clearCartItem(item))}
                className="text-black hover:text-red-700 font-bold transition-all duration-300 text-lg"
              />
            </div>

            <div className="w-28 mx-auto my-3">
              <img src={item.image} alt={item.title} />
            </div>

            <div>
              <p
                className="font-medium text-base hover:underline cursor-pointer max-w-[15rem] mx-auto !leading-6 uppercase"
                onClick={() => (
                  navigate(`/products/${item.id}`), setIsOpen(false)
                )}
              >
                {item.title}
              </p>

              <div className="grid grid-cols-3 py-1">
                <p className="font-medium">
                  <span className="text-sm">Total:</span>
                  <span className="text-green-800 text-base font-semibold">
                    ${item.price * item.qty}
                  </span>
                </p>
                <p className="text-gray-500">${item.price}</p>
                <div>
                  <span onMouseDown={() => dispatch(removeCart(item))}>
                    <FontAwesomeIcon icon={faMinus} className="mx-2 cursor-pointer" />
                  </span>
                  {item.qty}
                  <span>
                    <FontAwesomeIcon
                      icon={faPlus}
                      onMouseDown={() => dispatch(addCart(item))}
                      className="mx-2 cursor-pointer"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {state.length !== 0 && (
        <div>
          <div className="flex flex-row justify-around items-center uppercase font-medium">
            <p>
              <span className="text-sm">Total Price:</span>
              <span className="text-lg text-green-900 font-bold">
                ${sum.toFixed(2)}
              </span>
            </p>
            <p onClick={() => dispatch(emptyCart())}>
              <FontAwesomeIcon
                icon={faTrashCan}
                className="text-red-800 cursor-pointer text-base"
              />
            </p>
          </div>

          <div className="flex flex-col">
            <Link
              to="/checkout"
              className="bg-slate-800 text-white my-2 p-1 rounded-lg font-semibold"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
