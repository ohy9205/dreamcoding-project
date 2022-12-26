import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCarts from "../hooks/useCarts";

export default function CartStatus() {
  const {
    cartsQuery: { data: carts },
  } = useCarts();

  const cartsCount =
    carts &&
    carts.length > 0 &&
    carts.reduce((prev, cur) => {
      return prev + parseInt(cur.quantity);
    }, 0);

  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-5xl" />
      {carts && (
        <p className="font-bold h-7 w-7 text-center bg-sky-500 text-white rounded-full absolute -top-1 -right-2">
          {carts.length > 0 ? cartsCount : 0}
        </p>
      )}
    </div>
  );
}
