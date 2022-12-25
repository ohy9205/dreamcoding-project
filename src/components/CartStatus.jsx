import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../store/AuthContext";
import { useQuery } from "@tanstack/react-query";

export default function CartStatus() {
  const {
    user: { uid },
  } = useAuthContext();
  const { data: carts } = useQuery(["carts"], () => getCart(uid));
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-5xl" />
      {carts && (
        <p className="font-bold h-7 w-7 text-center bg-sky-500 text-white rounded-full absolute -top-1 -right-2">
          {carts.length}
        </p>
      )}
    </div>
  );
}
