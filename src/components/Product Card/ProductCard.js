import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import { addCart } from "../../action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-1 group shadow-lg h-[25rem] rounded-lg">
      <div className="relative">
        <img
          src={item.image}
          className="w-[200px] mx-auto p-9 h-60 group-hover:scale-110 transition duration-300 mb-4"
          alt={item.name}
        />
        <div className="absolute top-[2%] left-[80%] bg-red-300 px-2 py-1 flex flex-col gap-2 justify-center items-center opacity-0 group-hover:opacity-100 transition-all rounded-sm">
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
      <div className="flex flex-col gap-2">
        <p className="text-gray-400 text-xs">{item.category.toUpperCase()}</p>
        <span className="font-bold text-sm flex flex-col gap-2">
          <p className="text-green-800">${item.price}</p>
          <h2 className="max-w-[15rem] mx-auto">{item.title}</h2>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
