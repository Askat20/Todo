import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import styled from "styled-components";

export const TodoList = () => {
  const { todos, postTodo, deleteTodo } = useAppContext();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    postTodo(value);
    setValue("");
  };

  return (
    
    <div>
      <FormBtn onSubmit={handleSubmit}>
        <InputEvent
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <StyledBtn type="submit">Add </StyledBtn>
      </FormBtn>
      <StyledUltag>
        {todos &&
          todos.map((item) => (
            <li key={item.id}>
              {item.title}
              <StyledBtn2 onClick={() => deleteTodo(item.id)}>
                Delete
              </StyledBtn2>
            </li>
          ))}
      </StyledUltag>
    </div>
  );
};

const StyledUltag = styled.ul`
  margin: 20px auto;
  width: 300px;
  li {
    list-style-type: none;
    background-color: #f2f2f2;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
  }
`;
const StyledBtn = styled.button`
  padding: 3px 5px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: #e5e4e4;
`;
const StyledBtn2 = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #bd0303;
  color: #e5e4e4;
`;
const FormBtn = styled.form`
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  display: flex;
`;
const InputEvent = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
`;
