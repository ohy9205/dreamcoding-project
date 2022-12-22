import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logout, login, onUserStateChange } from "../api/firebase";
import { useEffect } from "react";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, []);

  return (
    <header className="w-full p-4 border-b border-zinc-200 flex justify-between ">
      <Link to="/" className="flex items-center text-4xl  text-sky-500">
        <FiShoppingBag />
        <h1 className="ml-2 font-semibold">Shoppy</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center h-full justify-between text-xl font-semibold">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/carts">Carts</Link>
          </li>
          {user && (
            <li className="flex items-center">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="border-radius-%"
              />
              <h3>{user.displayName}</h3>
            </li>
          )}
          <li>
            <Link to="/products/new" className="text-2xl">
              <BsPencilFill />
            </Link>
          </li>
          {user && <li onClick={logout}>Logout</li>}
          {!user && <li onClick={login}>Login</li>}
        </ul>
      </nav>
    </header>
  );
}
