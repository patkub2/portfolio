import React from "react";
import styled from "styled-components";
import Orange from "./Orange";

const AboutContainer = styled.div`
  border: 1px solid green; /* RED*/
  min-height: 30vh;
  width: 800px;
  display: column flex;
  align-items: center;
  justify-content: center;
  padding: 5vh;
`;

function About({ children }) {
  return <AboutContainer>{children}</AboutContainer>;
}

export default About;
