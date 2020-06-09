import React from "react";
import styled from "styled-components";
const AboutContainer = styled.div`
  /*border: 1px solid green; /* RED*/
  min-height: 30vh;
  width: 750px;
  display: column flex;
  align-items: center;
  justify-content: center;
  padding: 5vh;

  @media only screen and (max-width: 760px) {
    width: 100vw;
  }
`;
export default AboutContainer;
