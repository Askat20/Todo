import React, { useState } from "react";
import Header from "./components/header/Header";
import { TodoList } from "./components/Todolist";
import { AppProvider } from "./context/AppContext";
import Users from "./components/Users";

const App = () => {
  const [state, setState] = useState(false);

  const togglePage = () => {
    setState(!state);
  };

  return (
    <div>
      <Header togglePage={togglePage} />
      <AppProvider>{state ? <Users /> : <TodoList />}</AppProvider>
    </div>
  );
};

export default App;
