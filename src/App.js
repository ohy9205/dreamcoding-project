import Add from "./components/Add";
import Header from "./components/Header";
import List from "./components/List";
import style from "./App.module.css";
import { useEffect, useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const dummy = [
  {
    id: 1,
    todo: "밥먹기",
    status: "active",
  },
  {
    id: 2,
    todo: "집가기",
    status: "active",
  },
  {
    id: 4,
    todo: "공부하기",
    status: "completed",
  },
  {
    id: 5,
    todo: "강의보기",
    status: "completed",
  },
];

function App() {
  const [todoList, setTodoList] = useState(dummy);
  const [filterList, setFilterList] = useState(todoList);
  const [filter, setFilter] = useState("all");
  let id = -1;

  useEffect(() => {
    if (filter === "all") {
      setFilterList(todoList);
      return;
    }

    onFilter();
  }, [todoList, filter]);

  useEffect(() => {
    console.log(filterList);
  }, [filterList]);

  const onFilter = () => {
    setFilterList(todoList.filter((todo) => todo.status === filter));
  };

  const onChangeFilter = (filter) => {
    setFilter(filter);
  };

  const onAddTodoListHandler = (item) => {
    const newTodo = {
      id: ++id,
      todo: item,
      status: "active",
    };
    setTodoList((todoList) => [...todoList, newTodo]);
  };

  const onRemoveHandler = (targetId) => {
    setTodoList((todoList) => {
      return todoList.filter(
        (todo) => parseInt(todo.id) !== parseInt(targetId)
      );
    });
  };

  const onChangeStatusHandler = (targetId, status) => {
    // status를 completed로 바꿔야하는데

    const newTodoList = todoList.map((todo) => {
      if (parseInt(todo.id) === parseInt(targetId)) {
        todo.status = status === "completed" ? "completed" : "active";
      }
      return { ...todo };
    });

    setTodoList(newTodoList);
  };

  return (
    <DarkModeProvider>
      <div className={`${style.App}`}>
        <Header filter={filter} onChange={onChangeFilter} />
        <List
          todoList={filterList}
          onChangeStatus={onChangeStatusHandler}
          onRemove={onRemoveHandler}
        />
        <Add onAdd={onAddTodoListHandler} />
      </div>
    </DarkModeProvider>
  );
}

export default App;
