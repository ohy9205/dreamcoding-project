import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  const onChangeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onChange={onChangeFilter} />
      <List filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
