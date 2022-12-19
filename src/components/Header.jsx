import React from "react";
import style from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header({ filters, filter, onChange }) {
  const { darkMode, toggleModeHandler } = useDarkMode();

  return (
    <header className={style.header}>
      <button className={style.mode} onClick={toggleModeHandler}>
        {darkMode ? <HiMoon /> : <HiSun />}
      </button>
      <ul className={style.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${style.filter} ${
                filter === value && style.selected
              }`}
              onClick={() => onChange(value)}
              // className={`${style.button} ${value === filter ? style.on : ""}`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
