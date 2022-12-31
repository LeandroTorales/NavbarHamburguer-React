import React, { useState } from "react";
import styled from "styled-components";
import BackColorComponent from "./BackColorComponent";
import ButtonHamburguesa from "./ButtonHamburguesa";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #6d176d;
  text-shadow: 2px 2px 2px black;

  h2 {
    color: white;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      list-style: none;
      font-size: 1.5rem;
      margin: 0 0.5rem;
      color: white;
    }
  }

  .links {
    position: absolute;
    top: -2000px;
    text-align: center;
    a {
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
    }
  }

  .links.active {
    width: 100%;
    position: absolute;
    display: block;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    transition: all .6s ease-in-out;
    a {
      color: white;
      text-shadow: 2px 2px 2px black;
      transition: all .6s;
      font-size: 1.8rem;
      margin-bottom: 2rem;
      span{
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

      }
    }
  }

  .burguerButton {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const Navbar = () => {
  const [click, setClicked] = useState(false);
  console.log(click);

    const handleClick = () => {
        setClicked(!click)
    }
    
  return (
    <>
      <StyledNavbar>
        <h2>Sneakers</h2>
        <div className={`links ${click ? "active" : ""}`}>
          <a onClick={handleClick} href="#">Home</a>
          <a onClick={handleClick} href="#">Catalogo</a>
          <a onClick={handleClick} href="#">Zapatillas</a>
          <a onClick={handleClick} href="#">Contactos</a>
          <a onClick={handleClick} href="#">Preguntas <span>Frecuentes</span></a>
        </div>
        <div className="burguerButton">
          <ButtonHamburguesa
            propClicked={click}
            propHandlerClicked={setClicked}
                  />
              </div>
              <BackColorComponent propClicked={click}/>
              
      </StyledNavbar>
    </>
  );
};

export default Navbar;
