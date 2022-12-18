import React from "react";
import style from "./Add.module.css";

export default function Add() {
  return (
    <footer>
      <form className={style.form}>
        <input className={style.text} type="text" placeholder="Add Todo" />
        <button className={style.btn} type="submit">
          Add
        </button>
      </form>
    </footer>
  );
}
