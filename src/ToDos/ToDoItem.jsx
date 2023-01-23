import React, { useState } from "react";
import { useReducer } from "react";
import styled from "styled-components";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const redusers = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
};

export const ToDoItem = () => {
  const [todos, dispatch] = useReducer(redusers, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };

  return (
    <>
      <StyleForm onSubmit={handleSubmit}>
        <StyleInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </StyleForm>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </ul>
    </>
  );
};

const StyleInput = styled.input`
  width: 500px;
  padding: 8px;
  border: 2px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
`;

const StyleForm = styled.form`
  margin-bottom: 20px;
`;
