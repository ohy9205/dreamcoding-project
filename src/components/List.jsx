import React, { useEffect, useState } from "react";
import Add from "./Add";
import style from "./List.module.css";
import Todo from "./Todo";

const getFilteredList = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};

const getInitData = () => {
  console.log("rrr");
  const initData = JSON.parse(localStorage.getItem("todoList"));
  return initData;
};

export default function List({ filter }) {
  // useState에 useState(getInitData()) 처럼 함수만 넣어주면
  // 리렌더링 시 useState를 읽으면서 getInitData()이 자동으로 계속 호출된다
  // 이걸 방지하기 위해서는 콜백함수 형태로 넣어줘야 한다
  //  콜백 함수 형태로 넣으면 리렌더링시 콜백함수를 계속 읽어도
  // 초기값이 필요하지 않으면 실행은 되지 않는다
  const [todoList, setTodoList] = useState(() => getInitData());
  const filteredList = getFilteredList(todoList, filter);

  useEffect(() => {
    const objTodoList = JSON.stringify(todoList);
    objTodoList && localStorage.setItem("todoList", objTodoList);
  }, [todoList]);

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
      <main className={style.container}>
        <ul className={style.list}>
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
