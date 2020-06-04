import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

const LogoPWraper = styled.img`
  display: flex;
  align-items: center;
  width: 50px;
`;

const LogoP = () => {
  return <LogoPWraper src={logo} />;
};

export default LogoP;
