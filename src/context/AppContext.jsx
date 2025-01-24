import React, { createContext, useReducer, useContext, useEffect } from "react";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SETTODOS":
      return { ...state, todos: action.payload };
    case "ADDTODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETETODO":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTodos = async () => {
    try {
      const response = await fetch("https://e496476297eabad4.mokky.dev/todos");
      const data = await response.json();
      dispatch({ type: "SETTODOS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const postTodo = async (title) => {
    try {
      const response = await fetch("https://e496476297eabad4.mokky.dev/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, id: Date.now() }),
      });
      if (response.ok) {
        const newTodo = await response.json();
        dispatch({ type: "ADDTODO", payload: newTodo });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`https://e496476297eabad4.mokky.dev/todos/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "DELETETODO", payload: id });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <AppContext.Provider value={{ todos: state.todos, postTodo, deleteTodo }}>
      {children}
    </AppContext.Provider>
  );
};
