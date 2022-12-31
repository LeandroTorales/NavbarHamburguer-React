import React from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  .open {
    background-color: black;
    transition: all 0.5s;
    border-radius: 10px;
  }
  svg {
    font-size: 3rem;
  }
`;

const ButtonHamburguesa = ({ propClicked, propHandlerClicked }) => {
  return (
    <>
      <StyledButton
        onClick={() => {
          propHandlerClicked(!propClicked);
        }}
      >
        <BiMenu className={`${propClicked ? "open" : ""}`} />
      </StyledButton>
    </>
  );
};

export default ButtonHamburguesa;
