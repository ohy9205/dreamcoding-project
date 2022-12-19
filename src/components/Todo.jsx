import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import style from "./Todo.module.css";

export default function Todo({ todo, onRemove, onUpdate }) {
  const { text, status } = todo;

  const onClickHandler = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const onRemoveHandler = () => {
    onRemove(todo);
  };

  const activeTodo = (
    <label htmlFor={todo.id} className={style.label}>
      {text}
    </label>
  );

  const completedTodo = (
    <label htmlFor={todo.id} className={style.label}>
      <del>{text}</del>
    </label>
  );

  return (
    <li className={style.todo}>
      <input
        type="checkbox"
        id={todo.id}
        className={style.input}
        onChange={onClickHandler}
        checked={status === "completed"}
      />
      {status === "active" ? activeTodo : completedTodo}
      <span className={style.span}>
        <button onClick={onRemoveHandler} className={style.button}>
          <MdDeleteForever />
        </button>
      </span>
    </li>
  );
}
