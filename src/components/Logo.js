import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import LogoP from "./LogoP";

const LogoWraper = styled.nav`
  border: 1px solid yellow; /* RED*/
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 20px;
  img {
    margin-right: 20px;
  }
`;

const Logo = () => {
  return (
    <LogoWraper>
      <LogoP src={logo} alt=""></LogoP>Patryk Kubala
    </LogoWraper>
  );
};

export default Logo;
