import React from "react";
import style from "./Header.module.css";
import { BsFillSunFill } from "react-icons/bs";

export default function Header({ filters, filter, onChange }) {
  return (
    <header>
      <button className={style.mode}>
        <BsFillSunFill />
      </button>
      <ul className={style.filter}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onChange(value)}
              className={`${style.button} ${value === filter ? style.on : ""}`}>
              {value}
            </button>
          </li>
        ))}
        {/* <li onClick={onChangeFilter} id="all">
          All
        </li>
        <li onClick={onChangeFilter} id="active">
          Active
        </li>
        <li onClick={onChangeFilter} id="completed">
          Completed
        </li> */}
      </ul>
    </header>
  );
}
