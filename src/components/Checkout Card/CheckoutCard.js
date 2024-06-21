import React from "react";
import { Link } from "react-router-dom";

function CheckoutCard({ data, sum }) {
  return (
    <div className="flex flex-row-reverse items-center justify-around border p-3 rounded-lg">
      <div className="flex flex-col justify-start items-start gap-3">
        <Link
          to={`/${data.id}`}
          className="max-w-[15rem] text-left font-bold text-lg"
        >
          {data.title}
        </Link>
        <div className="flex flex-row items-center gap-3">
          <span>Quantity:</span>
          <p>{data.qty}</p>
        </div>

        <div className="flex flex-row items-center gap-3">
          <span>Total:</span>
          <p>${sum}</p>
        </div>
      </div>

      <img alt={data.title} src={data.image} className="w-[8rem]" />
    </div>
  );
}

export default CheckoutCard;
