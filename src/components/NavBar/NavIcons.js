import React from "react";
import styled from "styled-components";
import linkedin from "../../img/linkedin.svg";
import github from "../../img/github.svg";
import flagen from "../../img/flagEN.gif";
import flagpl from "../../img/flagPL.gif";
import mail from "../../img/mail.svg";

import { useSelector, useDispatch } from "react-redux";
import { change } from "../../redux";

const NavIconsContainer = styled.div`
  /*border: 1px solid green; /* green*/
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

const IconFlag = styled.img`
  /*border: 1px solid green; /* green*/
  width: 30px;
  height: 20px;
  margin: 0 10px;
  cursor: pointer;
`;
const Al = styled.a`
  /*border: 1px solid green; /* green*/
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    padding-top: 5px;
  }
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
  const language = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <NavIconsContainer>
      <IconFlag
        onClick={() => dispatch(change())}
        src={language ? flagpl : flagen}
      />
      <Al
        href="https://www.linkedin.com/in/patryk-kubala-a9730b1a2/"
        target="_blank"
      >
        <Icon src={linkedin} href="/" target="_blank" />
      </Al>

      <Al href="https://github.com/patkub2" target="_blank">
        <Icon src={github} />
      </Al>
      <Al href="mailto:patrykkubala1999@gmail.com" target="_blank">
        <Icon src={mail} />
      </Al>
    </NavIconsContainer>
  );
}

export default NavIcons;
