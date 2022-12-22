import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill, BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>{" "}
          </li>
          <li>
            <Link to="/carts">Carts</Link>{" "}
          </li>
          <li>
            <Link to="/products/new">
              <BsPencilFill />
            </Link>{" "}
          </li>
          <li>
            <Link to={`/products/${"fsd"}`}>Login</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
