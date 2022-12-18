import React, { useState } from "react";
import style from "./List.module.css";
import Todo from "./Todo";

export default function List({ todoList = [], onRemove, onChangeStatus }) {
  return (
    <main>
      <ul>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onChangeStatus={onChangeStatus}
          />
        ))}
      </ul>
    </main>
  );
}
