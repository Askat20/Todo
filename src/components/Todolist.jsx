import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import styled from "styled-components";

export const TodoList = () => {
  const { todos, postTodo, deleteTodo } = useAppContext();
  const [value, setValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    postTodo(value);
    setValue("");
  };

  const openModal = (id) => {
    setTodoToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTodoToDelete(null);
  };

  const handleDelete = () => {
    if (todoToDelete) {
      deleteTodo(todoToDelete);
      closeModal();
    }
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
              <StyledBtn2 onClick={() => openModal(item.id)}>Delete</StyledBtn2>
            </li>
          ))}
      </StyledUltag>

      {/* Modal */}
      {isModalOpen && (
        <ModalDiv>
          <ModalDiv1>
            <h3>очурсон олосун?</h3>
            <ModalDiv3>
              <ModalButton onClick={handleDelete}>макул</ModalButton>
              <ModalButton onClick={closeModal}>жашагым келтат</ModalButton>
            </ModalDiv3>
          </ModalDiv1>
        </ModalDiv>
      )}
    </div>
  );
};

const StyledUltag = styled.ul`
  margin: 20px auto;
  width: 300px;
  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #bd0303;
    color: #e5e4e4;
    margin-left: 10px;
    cursor: pointer;
  }
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
  cursor: pointer;
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

const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000052;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDiv1 = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

const ModalDiv3 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${({ cancel }) => (cancel ? "#bbb" : "#bd0303")};
  color: white;
`;
