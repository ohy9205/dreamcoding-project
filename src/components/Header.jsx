import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-zinc-200 flex justify-between ">
      <Link to="/" className="flex items-center">
        <FiShoppingBag className="text-4xl text-sky-600" />
        <h1 className="ml-2 text-4xl font-semibold text-sky-500">Shoppy</h1>
      </Link>
      <nav className="w-1/4">
        <ul className="flex items-center h-full justify-between text-xl font-semibold">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/carts">Carts</Link>
          </li>
          <li>
            <Link to="/products/new">
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
