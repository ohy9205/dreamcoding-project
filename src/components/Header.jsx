import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logout, login, onUserStateChange } from "../api/firebase";
import { useEffect } from "react";
import User from "./User";

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, []);

  const showLogin = () => {
    return (
      <>
        <li>
          <Link to="/carts">Carts</Link>
        </li>
        {user && user.isAdmin && (
          <li>
            <Link to="/products/new" className="text-3xl">
              <BsPencilFill />
            </Link>
          </li>
        )}
        {user && (
          <li>
            <User user={user} />
          </li>
        )}
      </>
    );
  };

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
          {user && showLogin()}
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </ul>
      </nav>
    </header>
  );
}
