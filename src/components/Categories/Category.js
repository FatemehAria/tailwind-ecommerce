import React from "react";

function Category({ handleClick, categoryName, category }) {
  return (
    <p
      onClick={() => handleClick()}
      className={`border border-red-400 rounded-lg p-3 flex justify-center items-center hover:bg-red-400 hover:text-white cursor-pointer font-semibold whitespace-nowrap ${
        category === categoryName
          ? "bg-red-400 text-white transition-all duration-300"
          : "bg-white text-black transition-all duration-300"
      }`}
    >
      {categoryName}
    </p>
  );
}

export default Category;
