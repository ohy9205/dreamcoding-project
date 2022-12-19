import React, { useContext, useState } from "react";
import style from "./Header.module.css";
import { BsFillSunFill } from "react-icons/bs";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Header({ filter, onChange, onChangeMode }) {
  const { darkMode, toggleMode } = useContext(DarkModeContext);

  const onChangeFilter = (e) => {
    onChange(e.target.id);
  };

  const onClickMode = (e) => {
    toggleMode();
    console.log(darkMode);
  };

  return (
    <header className={darkMode ? style.dark_mode : ""}>
      <button className={style.mode} onClick={onClickMode}>
        <BsFillSunFill />
      </button>
      <ul className={style.filter}>
        <li onClick={onChangeFilter} id="all">
          All
        </li>
        <li onClick={onChangeFilter} id="active">
          Active
        </li>
        <li onClick={onChangeFilter} id="completed">
          Completed
        </li>
      </ul>
    </header>
  );
}
