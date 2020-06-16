import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavIcons from "./NavIcons";

const NavBarContainer = styled.div`
  /*border: 1px solid red; /* RED*/
  min-height: 5vh;
  display: flex;
  padding-top: 0vh;
  justify-content: space-between;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 80;
  @media only screen and (max-width: 700px) {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <Logo />
      <NavIcons />
    </NavBarContainer>
  );
}

export default NavBar;
