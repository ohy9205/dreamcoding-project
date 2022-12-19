import React, { useState } from "react";
import Add from "./Add";
import style from "./List.module.css";
import Todo from "./Todo";

const dummy = [
  {
    id: 1,
    text: "밥먹기",
    status: "active",
  },
  {
    id: 2,
    text: "집가기",
    status: "active",
  },
  {
    id: 4,
    text: "공부하기",
    status: "completed",
  },
  {
    id: 5,
    text: "강의보기",
    status: "completed",
  },
];

const getFilteredList = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};

export default function List({ filter }) {
  const [todoList, setTodoList] = useState(dummy);
  const filteredList = getFilteredList(todoList, filter);

  const onAddTodoListHandler = (todo) => {
    setTodoList((todoList) => [...todoList, todo]);
  };

  const onChangeStatusHandler = (updateTodo) => {
    setTodoList((todoList) =>
      todoList.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
    );
  };

  const onRemoveHandler = (removeTodo) => {
    setTodoList((todoList) => {
      return todoList.filter((todo) => todo.id !== removeTodo.id);
    });
  };

  return (
    <>
      <main>
        <ul>
          {filteredList.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onRemove={onRemoveHandler}
              onUpdate={onChangeStatusHandler}
            />
          ))}
        </ul>
        <Add onAdd={onAddTodoListHandler} />
      </main>
    </>
  );
}
