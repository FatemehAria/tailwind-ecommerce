import React from "react";
import disconnection from "../../img/disconnection.svg";

function ErrorMessage({ fetchProducts, productError }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 my-5 w-[25%] mx-auto py-3 shadow-xl">
      <div className="flex flex-col justify-center items-center w-full bg-red-400 text-white py-4">
        <img src={disconnection} alt="disconnected" className="w-32" />
        <p className="font-semibold text-3xl">No Internet!</p>
      </div>
      <p className="max-w-sm text-[21px]">{productError}</p>
      <button
        onClick={() => fetchProducts()}
        className="text-[21px] bg-red-400 text-white px-8 py-2 rounded-3xl shadow-md"
      >
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;
