import React from "react";
import styled from "styled-components";
import linkedin from "../../img/linkedin.svg";
import github from "../../img/github.svg";
import flag from "../../img/flag.png";
import mail from "../../img/mail.svg";

const NavIconsContainer = styled.div`
  /*border: 1px solid green; /* green*/
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 30px;
  margin: 0 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid #ffffff;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 10px 20px;
  text-decoration: none;
  margin: 0 10px;
  :active {
    position: relative;
    top: 1px;
  }
`;

function NavIcons() {
  return (
    <NavIconsContainer>
      <Icon src={flag} />
      <Icon src={linkedin} />
      <Icon src={github} />
      <Icon src={mail} />
    </NavIconsContainer>
  );
}

export default NavIcons;
