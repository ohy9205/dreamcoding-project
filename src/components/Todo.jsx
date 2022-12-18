import React from "react";
import { MdDeleteForever } from "react-icons/md";
import style from "./Todo.module.css";

export default function Todo({ todo, onRemove, onChangeStatus }) {
  const onClickHandler = (e) => {
    // console.log(e.currentTarget.id);
    onChangeStatus(e.currentTarget.id);
  };

  const onRemoveHandler = (e) => {
    const targetId = e.currentTarget.id;
    onRemove(targetId);
  };

  return (
    <li id={todo.id} className={style.todo}>
      <div>
        <input type="checkbox" id={todo.id} className={style.input} />
        <label htmlFor={todo.id} className={style.label}>
          {todo.todo}
        </label>
      </div>
      <MdDeleteForever
        className={style.svg}
        onClick={onRemoveHandler}
        id={todo.id}
      />
    </li>
  );
}
