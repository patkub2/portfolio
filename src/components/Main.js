import React from "react";
import styled from "styled-components";
import MainText from "./MainText";
import comp from "../img/comp2.png";

const MainContainer = styled.div`
  border: 1px solid yellow; /* RED*/
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column wrap;
`;

function Main() {
  return (
    <MainContainer>
      <MainText />
      <img src={comp} />
    </MainContainer>
  );
}

export default Main;
