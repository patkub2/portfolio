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
      <Icon src={linkedin} />
      <Icon src={github} />
      <Icon src={mail} />
    </NavIconsContainer>
  );
}

export default NavIcons;
