import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getProducts } from "../../action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import hero from "../../img/woman_hero.png";

const Home = () => {
  const { proData, proLoading, proError } = useSelector(
    (state) => state.products
  );
  const state = useSelector((state) => state.cartItems);
  // console.log(state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <div className="bg-myBackgroundImg w-full bg-cover bg-no-repeat h-[40rem] relative">
        <div className="container mx-auto flex justify-around h-full">
          <div className="my-auto px-40 flex flex-col items-start">
            <div className="font-semibold uppercase flex flex-row">
              {/* -------N------- */}
              <div className="bg-red-500 w-10 h-[2px] my-auto mr-2"></div>New
              Trend
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-left">
              Automn sale stylish
            </h1>
            <div className="font-bold text-4xl">Women</div>
            <Link
              to="/products"
              className="uppercase text-xs pt-5 border-b-2 border-black font-semibold"
            >
              Discover more
            </Link>
          </div>
          <img src={hero} className="h-[40rem] hidden lg:block pr-44 pt-10" />
        </div>
      </div>

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
        <p> {proError} </p>
      ) : (
        <div className="w-5/6 mx-auto grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10">
          {proData.map(
            (item) =>
              (item.category === "women's clothing" ||
                item.category === "men's clothing") && (
                <div className="p-1 group" key={item.id}>
                  <div className="relative">
                    <img
                      src={item.image}
                      className="w-[200px] mx-auto border p-9 h-60 group-hover:scale-110 transition duration-300 mb-4"
                    />
                    <div className="absolute top-[2%] left-[75%] bg-red-300 px-2 py-1 flex flex-col gap-2 justify-center items-center opacity-0 group-hover:opacity-100 transition-all">
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="cursor-pointer"
                        onClick={() => dispatch(addCart(item))}
                      />
                      <FontAwesomeIcon
                        icon={faEye}
                        className="cursor-pointer"
                        onClick={() => navigate(`/${item.id}`)}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400">{item.category}</p>
                    <span className="font-bold text-sm">
                      <p>${item.price}</p>
                      <h2>{item.title}</h2>
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
// <FontAwesomeIcon icon="fa-solid fa-eye" />
// <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
//  as={Link} to={`/products/${item.id}`}
