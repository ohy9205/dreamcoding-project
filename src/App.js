import Header from "./components/Header";
import List from "./components/List";
import style from "./App.module.css";
import { useState } from "react";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  const onChangeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={style.App}>
      <Header filters={filters} filter={filter} onChange={onChangeFilter} />
      <List filter={filter} />
    </div>
  );
}

export default App;
