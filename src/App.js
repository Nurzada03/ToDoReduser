import { ToDoItem } from "./ToDos/ToDoItem";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <StyledTodo>
          <ToDoItem />
        </StyledTodo>
      </AppContainer>
    </>
  );
}

export default App;

const StyledTodo = styled.div`
  width: 700px;
  padding: 70px;
  border: 4px solid aqua;
  background-color: aqua;
  opacity: 0.4;
  border-radius: 10px;
`;

const AppContainer = styled.div`
  position: fixed;
  left: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  :hover {
    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(41, 114, 149, 1) 45%,
      rgba(75, 214, 184, 1) 73%
    );
    border-radius: 10px;
  }
`;
