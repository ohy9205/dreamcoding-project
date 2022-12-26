import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useCarts from "../hooks/useCarts";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-sky-500 hover:scale-105 mx-1";

export default function CartItem({
  product,
  product: { id, image, name, option, quantity, price },
}) {
  const { addCarts, removeCarts } = useCarts();

  const handleMinus = () => {
    if (quantity < 2) return; //수량이 1개 이하일때는 더이상 마이너스 못함
    addCarts.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addCarts.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeCarts.mutate(id, {
      onSuccess: console.log("성공"),
    });
  };

  return (
    <li className="flex justify-between my-2 items-center">
      <img src={image} alt={name} className="w-24 md:w-48 rounded-lg" />
      <div className="flex flex-1 justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{name}</p>
          <p className="text-xl font-bold text-sky-500">{option}</p>
          <p>{price}</p>
        </div>
        <div className="text-2xl flex items-center">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
