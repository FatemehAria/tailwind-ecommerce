import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../../action";

const Singleproduct = () => {
  const { id } = useParams();
  const [singlepro, setSinglepro] = useState([]);
  const [singleLoading, setSingleLoading] = useState(true);
  const state = useSelector(state => state.cartItems)
  const dispatch = useDispatch()
  const getSingleProducts = async () => {
    try {
      // setLoading(true);
      const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
      setSingleLoading(false);
      // console.log(data);
      setSinglepro([data]);
    } catch (error) {
      console.log(error.message);
      setSingleLoading(false);
    }
  };

  useEffect(() => {
    getSingleProducts();
  });

  return (
    <div>
      {singleLoading ? (
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        singlepro.map((item) => {
          return (
            <div key={item.id}>
              <div className="grid grid-cols-2 py-5 px-7">
                <img src={item.image} className="w-1/3 ml-28 my-auto" />
                <div className="py-52 leading-10">
                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="flex justify-evenly font-semibold">
                    <p className="text-green-800">${item.price}</p>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-300 mr-2"
                      />
                      {item.rating.rate}
                    </p>
                  </div>
                  <button onClick={() => dispatch(addCart(item)) } className="bg-slate-900 text-white p-2 rounded-md mt-10">Add To Cart</button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Singleproduct;
