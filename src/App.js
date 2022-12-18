import Add from "./components/Add";
import Header from "./components/Header";
import List from "./components/List";
import style from "./App.module.css";
import { useState } from "react";

const dummy = [
  {
    id: 1,
    todo: "밥먹기",
    status: "todo",
  },
  {
    id: 2,
    todo: "집가기",
    status: "todo",
  },
  {
    id: 3,
    todo: "자기",
    status: "active",
  },
  {
    id: 4,
    todo: "공부하기",
    status: "active",
  },
  {
    id: 5,
    todo: "강의보기",
    status: "done",
  },
];

function App() {
  const [todoList, setTodoList] = useState(dummy);
  let id = -1;

  const onAddTodoListHandler = (item) => {
    const newTodo = {
      id: ++id,
      todo: item,
      status: "todo",
    };
    setTodoList((todoList) => [...todoList, newTodo]);
    console.log(item, newTodo);
  };

  return (
    <div className={style.App}>
      <Header />
      <List todoList={todoList} />
      <Add onAdd={onAddTodoListHandler} />
    </div>
  );
}

export default App;
