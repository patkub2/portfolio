import React from "react";
import styled from "styled-components";
import Orange from "./Orange";

const TechContainer = styled.div`
  border: 1px solid green; /* RED*/
  min-height: 30vh;
  width: 48vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Tech({ children }) {
  return <TechContainer>{children}</TechContainer>;
}

export default Tech;
