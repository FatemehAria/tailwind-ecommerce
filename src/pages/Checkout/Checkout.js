import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCard from "../../components/Checkout Card/CheckoutCard";
import toast from "react-hot-toast";
import { emptyCart } from "../../action";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems } = useSelector((state) => state);
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    let total = cartItems.reduce((acc, current) => {
      return acc + current.price * current.qty;
    }, 0);
    setSum(total);
  }, [cartItems]);

  return (
    <div className="pt-[5%] w-[40%] mx-auto grid grid-cols-1 gap-5">
      {cartItems.map((item) => (
        <div>
          <CheckoutCard data={item} sum={item.price * item.qty} />
        </div>
      ))}
      {cartItems.length !== 0 ? (
        <div>
          <p>Your Total Price: ${sum}</p>
          <div className="flex justify-center items-center">
            <button
              className="bg-green-700 text-white font-semibold text-lg px-4 py-2 rounded-lg"
              onClick={() => (
                toast.success("Sumission Successfull!"),
                dispatch(emptyCart(), navigate("/"))
              )}
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        "Cart is empty!"
      )}
    </div>
  );
}

export default Checkout;
