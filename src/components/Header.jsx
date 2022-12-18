import React, { useState } from "react";
import style from "./Header.module.css";
import { BsFillSunFill } from "react-icons/bs";

export default function Header({ filter, onChange }) {
  // const [filtering, setFiltering] = useState(filter);

  const onChangeFilter = (e) => {
    onChange(e.target.id);
  };

  return (
    <header>
      <button className={style.mode}>
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
