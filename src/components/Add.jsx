import React, { useContext, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import style from "./Add.module.css";

export default function Add({ onAdd }) {
  const [text, setText] = useState("");
  const { darkMode, toggleMode } = useContext(DarkModeContext);

  const onChangeTextHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <footer
      onSubmit={onSubmitHandler}
      className={darkMode ? style.dark_mode : ""}>
      <form className={style.form}>
        <input
          className={style.text}
          type="text"
          placeholder="Add Todo"
          onChange={onChangeTextHandler}
          value={text}
        />
        <button className={style.btn} type="submit">
          Add
        </button>
      </form>
    </footer>
  );
}
