import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../action";
import ProductCard from "../../components/Product Card/ProductCard";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/Error/ErrorMessage";
import { MotionVariants } from "../../utils/util";
import { motion } from "framer-motion";

const Products = () => {
  const { proLoading, proData, proError } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div
      className="pt-[5%] px-5 mb-8"
    >
      {proLoading ? (
        <div className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2">
          <Loading />
        </div>
      ) : proError ? (
        <div className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2">
          <ErrorMessage />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 justify-center items-center">
          {proData.map((item, index) => {
            return (
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
