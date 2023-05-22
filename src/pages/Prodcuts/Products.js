import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../action";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { proLoading, proData, proError } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="mt-10">
      {proLoading ? (
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
      ) : proError ? (
        <p>{proError}</p>
      ) : (
        <div className="w-5/6 mx-auto grid grid-cols-5 gap-4 sm:max-lg:grid-cols-3">
          {proData.map((item) => {
            return (
              <div className="p-1" key={item.id}>
                <img
                  src={item.image}
                  className="w-[200px] mx-auto border p-9 h-60"
                />
                <div className="text-left p-5">
                  <p className="text-gray-400 capitalize">{item.category}</p>
                  <span className="font-bold text-sm">
                    <p className="text-green-800">${item.price}</p>
                    <h2
                      onClick={() => navigate(`/products/${item.id}`)}
                      className="hover:text-blue-800 hover:cursor-pointer"
                    >
                      {item.title}
                    </h2>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
