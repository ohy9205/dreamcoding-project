import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import style from "./Todo.module.css";

export default function Todo({ todo, onRemove, onChangeStatus }) {
  const onClickHandler = (e) => {
    const status = todo.status === "active" ? "completed" : "active";
    onChangeStatus(e.target.parentNode.id, status);
  };

  const onRemoveHandler = (e) => {
    const targetId = e.currentTarget.id;
    onRemove(targetId);
  };

  const activeTodo = (
    <label htmlFor={`todo_${todo.id}`} className={style.label}>
      {todo.todo}
    </label>
  );

  const completedTodo = (
    <label htmlFor={`todo_${todo.id}`} className={style.label}>
      <del>{todo.todo}</del>
    </label>
  );

  return (
    <li id={todo.id} className={style.todo}>
      <input
        type="checkbox"
        id={`todo_${todo.id}`}
        className={style.input}
        onChange={onClickHandler}
        checked={todo.status === "completed"}
      />
      {todo.status === "active" ? activeTodo : completedTodo}
      <MdDeleteForever
        className={style.svg}
        onClick={onRemoveHandler}
        id={todo.id}
      />
    </li>
  );
}
