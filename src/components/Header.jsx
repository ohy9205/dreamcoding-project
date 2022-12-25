import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../store/AuthContext";
import CartStatus from "./CartStatus";

export default function Header() {
  const { user, login, logout } = useAuthContext();

  const showLogin = () => {
    return (
      <>
        <li>
          <Link to="/carts">
            <CartStatus />
          </Link>
        </li>
        {user && user.isAdmin && (
          <li>
            <Link to="/products/new" className="text-3xl">
              <BsPencilFill />
            </Link>
          </li>
        )}
        {user && (
          <li className="shrink-0">
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
            <Button text="Logout" onClick={logout} />
          ) : (
            <Button text="Login" onClick={login} />
          )}
        </ul>
      </nav>
    </header>
  );
}
