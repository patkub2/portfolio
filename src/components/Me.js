import React from "react";
import styled from "styled-components";
import MainText from "./MainText";

const MeContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column wrap;
  z-index: 9;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darker};
`;

function Me() {
  return <MeContainer></MeContainer>;
}

export default Me;
