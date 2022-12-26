import React from "react";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button";
import useCarts from "../hooks/useCarts";

const SHIPPING = 3000;
export default function MyCart() {
  const {
    cartsQuery: { isLoading, data: products },
  } = useCarts();

  if (isLoading) return <p>Loading...</p>;

  // 쇼핑카트에 아이템이 하나 이상 있는지 확인
  const hasProducts = products && products.length > 0;
  const totalPrice =
    products.length > 0 &&
    products.reduce(
      (prev, cur) => prev + parseInt(cur.price) * parseInt(cur.quantity),
      0
    );
  return (
    <section className="p-8">
      <h1 className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니
      </h1>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <ul className="border-b border-gray-300 mb-8 p-4 px-8">
          {products &&
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
        </ul>
      )}
      <div className="mb-6 flex justify-between items-center p-2 md:px-8 lg:px-16">
        <PriceCard text="상품 총액" price={totalPrice} />
        <BsFillPlusCircleFill className="shrink-0" />
        <PriceCard text="배송비" price={SHIPPING} />
        <FaEquals className="shrink-0" />
        <PriceCard text="총 가격" price={totalPrice + SHIPPING} />
      </div>
      <Button text="주문하기" />
    </section>
  );
}
