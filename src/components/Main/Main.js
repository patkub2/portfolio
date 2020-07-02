import React from "react";
import styled from "styled-components";
import MainText from "./MainText";
import comp from "../../img/comp.png";
import Arrow from "./Arrow";

const MainContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column wrap;
  z-index: 9;
  position: relative;
`;

const Img = styled.img`
  max-width: 500px;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

function Main() {
  return (
    <MainContainer>
      <MainText />
      <Arrow />
      <Img src={comp} />
    </MainContainer>
  );
}

export default Main;
