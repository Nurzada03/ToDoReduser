import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <TextContainer>
      <div></div>
      <Text>Write youre dreams:</Text>
    </TextContainer>
  );
};

export default Header;

const TextContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
const Text = styled.h2`
  position: absolute;
  left: 250px;
  top: 150px;
  color: #1d3436;

  :hover {
    color: white;
  }
`;
