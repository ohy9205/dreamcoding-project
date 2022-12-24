import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, name, price, category },
}) {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <li
      className="rounded-lg shadow-md overflow-hidden p-2 cursor-pointer"
      onClick={onClickHandler}>
      <img src={image} alt={name} className="w-full h-72 object-cover" />
      <div className="mt-2 px-2 text-lg">
        <h3>{name}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="mt-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
