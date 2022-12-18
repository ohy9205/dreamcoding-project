import React from "react";
import style from "./List.module.css";
import { MdDeleteForever } from "react-icons/md";

export default function List({ todoList = [] }) {
  return (
    <main>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <div>
              <input type="checkbox" value={todo.todo} id={todo.id} />
              <label htmlFor={todo.id}>{todo.todo}</label>
            </div>
            <button className={style.remove}>
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
