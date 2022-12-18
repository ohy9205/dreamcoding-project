import Add from "./components/Add";
import Header from "./components/Header";
import List from "./components/List";
import style from "./App.module.css";

const dummy = [
  {
    id: 1,
    todo: "밥먹기",
    status: "todo",
  },
  {
    id: 2,
    todo: "밥먹기",
    status: "todo",
  },
  {
    id: 3,
    todo: "밥먹기",
    status: "active",
  },
  {
    id: 4,
    todo: "밥먹기",
    status: "active",
  },
  {
    id: 5,
    todo: "밥먹기",
    status: "done",
  },
];

function App() {
  return (
    <div className={style.App}>
      <Header />
      <List />
      <Add />
    </div>
  );
}

export default App;
