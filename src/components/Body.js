import React from "react";
import styled from "styled-components";
import LogoP from "./LogoP";
import logo from "../img/logo.png";

const BodyContainer = styled.div`
  min-height: 2000px;
`;

function Body() {
  return (
    <BodyContainer>
      <LogoP src={logo} />
    </BodyContainer>
  );
}

export default Body;
