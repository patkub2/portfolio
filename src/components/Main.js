import React from "react";
import styled from "styled-components";
import MainText from "./MainText";
import Snow from "./Snow";
import comp from "../img/camp.png";

const MainContainer = styled.div`
  border: 1px solid yellow; /* RED*/
  min-height: 94vh;
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
