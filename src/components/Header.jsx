import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-zinc-200 flex justify-between ">
      <Link to="/" className="flex items-center text-4xl  text-sky-500">
        <FiShoppingBag />
        <h1 className="ml-2 font-semibold">Shoppy</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center h-full justify-between text-xl font-semibold">
          <li>
            <Link k to="/products">
              Products
            </Link>{" "}
          </li>
          <li>
            <Link to="/carts">Carts</Link>
          </li>
          <li>
            <Link to="/products/new" className="text-2xl">
              <BsPencilFill />
            </Link>
          </li>
          <li>
            <Link to={`/products/${"fsd"}`}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
