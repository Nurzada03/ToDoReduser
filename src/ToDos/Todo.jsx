import React from "react";
import styled from "styled-components";



import { ACTIONS } from "./ToDoItem";

const TodoFunction = ({ todo, dispatch }) => {
  console.log(todo);
  return (
    <ListContainer>
      <span style={{ textDecoration: todo.complete ? "line-through" : "#000" }}>
        {todo.name}
      </span>

      <Containerbtn>
        <StyledBtn
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </StyledBtn>
        <StyledBtn
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </StyledBtn>

      </Containerbtn>
    </ListContainer>
  );
};
export default TodoFunction;


const ListContainer = styled.div`
  width: 500px;
  padding: 7px;
  border: 2px solid black;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
const StyledBtn = styled.button`
  padding: 9px;
  width: 70px;
  border-radius: 7px;
  background-color: beige;
  :hover {
    background-color: blueviolet;
  }
`;
const Containerbtn = styled.div`
  display: flex;
  gap: 20px;
`;
