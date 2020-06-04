import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    max-height:100vh;
    color: ${({ theme }) => theme.colors.white};
    font-family: Poppins;
  margin: 0;
  padding: 0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;
