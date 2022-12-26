import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { addOrUpdateToCart } from "../api/firebase";
import Button from "../components/ui/Button";
import useCarts from "../hooks/useCarts";
import { useAuthContext } from "../store/AuthContext";

export default function ProductDetail() {
  const {
    user: { uid },
  } = useAuthContext();

  const {
    state: {
      product,
      product: { id, image, name, description, category, price, options },
    },
  } = useLocation();

  const { addCarts } = useCarts();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = (e) => {
    // 장바구니에 추가할 데이터
    const product = {
      id,
      image,
      name,
      price,
      option: selected,
      quantity: 1,
    };

    // 장바구니 추가
    addCarts.mutate(product);
  };

  if (!product) return <section>Loading...</section>;

  return (
    <>
      <p className="m-2 font-semibold"> {category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img src={image} alt={name} className="md:w-2/4 basis-7/12 " />
        <div className="w-full basis=5/12 flex-col p-4">
          <h1 className="text-3xl font-bold mb-3">{name}</h1>
          <h2 className="text-2xl font-semibold pb-3 border-solid border-b-2">
            ₩{price.toLocaleString()}
          </h2>
          <p className="mt-3">{description}</p>
          <div className="mt-2 flex justify-between items-center">
            <label id="select" className=" font-bold text-sky-500 text-sm">
              옵션:
            </label>
            <select
              id="select"
              className="p-2 m-4 flex-grow border-dashed border-4 border-sky-200 outline-none"
              value={selected}
              onChange={handleSelect}>
              {options.map((it, idx) => (
                <option key={idx}>{it}</option>
              ))}
            </select>
          </div>
          <Button text="장바구니 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
