import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../action";
import { Link } from "react-router-dom";
import hero from "../../img/woman_hero.png";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/Error/ErrorMessage";
import Category from "../../components/Categories/Category";
import ProductCard from "../../components/Product Card/ProductCard";
import { motion } from "framer-motion";
import { MotionVariants } from "../../utils/util";

const Home = () => {
  const { proData, proLoading, proError } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const [category, setCategory] = useState("All");

  const FetchProducts = () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <div className="w-full">
      <div className="bg-myBackgroundImg w-full bg-cover bg-no-repeat relative h-[40rem] px-[10%]">
        <div className="flex justify-around h-full">
          <div className="flex flex-col items-start my-auto px-5 lg:px-0">
            <div className="font-semibold uppercase flex flex-row">
              <div className="bg-red-500 w-10 h-[2px] my-auto mr-2"></div>New
              Trend
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-left">
              Automn sale stylish
            </h1>
            <div className="font-bold text-4xl">Clothing</div>
            <Link
              to="/products"
              className="uppercase text-xs pt-5 border-b-2 border-black font-semibold hover:border-b-red-400 hover:text-red-400 transition-all duration-500"
            >
              Discover more
            </Link>
          </div>
          <img
            src={hero}
            className="hidden md:block pt-[5%] pb-[0.2rem]"
            alt="hero"
          />
        </div>
      </div>

      {proLoading ? (
        <Loading />
      ) : proError ? (
        <ErrorMessage fetchProducts={FetchProducts} productError={proError} />
      ) : (
        <div className="my-8">
          <div className="flex justify-center items-center mb-12 lg:text-lg text-sm gap-4 flex-wrap">
            <Category
              categoryName="All"
              handleClick={() => setCategory("All")}
              category={category}
            />
            <Category
              categoryName="Men's Clothing"
              handleClick={() => setCategory("Men's Clothing")}
              category={category}
            />
            <Category
              categoryName="Women's Clothing"
              handleClick={() => setCategory("Women's Clothing")}
              category={category}
            />
            <Category
              categoryName="Jewelery"
              handleClick={() => setCategory("Jewelery")}
              category={category}
            />
            <Category
              categoryName="Electronics"
              handleClick={() => setCategory("Electronics")}
              category={category}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 justify-center items-center px-5">
            {proData
              .filter((item) =>
                category === "All"
                  ? item
                  : item.category === category.toLowerCase() && item
              )
              .map((item, index) => (
                <motion.div
                  variants={MotionVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: index * 0.25,
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                  viewport={{ amount: 0 }}
                  key={item.id}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
// <FontAwesomeIcon icon="fa-solid fa-eye" />
// <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
//  as={Link} to={`/products/${item.id}`}
