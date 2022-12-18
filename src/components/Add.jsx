import React, { useState } from "react";
import style from "./Add.module.css";

export default function Add({ onAdd }) {
  const [text, setText] = useState("");

  const onChangeTextHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <footer onSubmit={onSubmitHandler}>
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
