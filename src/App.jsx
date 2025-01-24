// import { Todolist } from "./components/Todolist";
import Header from "./components/header/Header";
import { TodoList } from "./components/Todolist";
import { AppProvider } from "./context/AppContext";

export const App = () => {
  return (
    <div>
      <Header />
      <AppProvider>
        <TodoList />
      </AppProvider>
    </div>
  );
};
