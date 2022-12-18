import React from "react";
import style from "./Header.module.css";
import { BsFillSunFill } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <button className={style.mode}>
        <BsFillSunFill />
      </button>
      <ul className={style.filter}>
        <li className={style.on}>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </header>
  );
}
