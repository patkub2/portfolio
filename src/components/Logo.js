import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

const LogoWraper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 20px;
  img {
    width: 50px;
    margin-right: 10px;
  }
`;

const Logo = () => {
  return (
    <LogoWraper>
      <img src={logo} alt=""></img>Patryk Kubala
    </LogoWraper>
  );
};

export default Logo;
