import React from "react";
import styled from "styled-components";

const Containerr = styled.nav`
  min-height: 100vh;
  background-color: #0d2938;
`;

const Container = ({ children }) => {
  return <Containerr>{children}</Containerr>;
};

export default Container;
