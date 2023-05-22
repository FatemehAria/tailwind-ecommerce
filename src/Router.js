import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Prodcuts/Products";
import Singleproduct from "./pages/Singleproduct/Singleproduct";
import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Singleproduct />} />
      <Route path="/:id" element={<Singleproduct />} />
    </Routes>
  );
};

export default Router;
