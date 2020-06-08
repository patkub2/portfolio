import React from "react";
import styled from "styled-components";

const TechContainer = styled.div`
  /*border: 1px solid green; /* RED*/
  min-height: 20vh;
  padding: 10px;
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

function Tech({ children }) {
  return <TechContainer>{children}</TechContainer>;
}

export default Tech;
