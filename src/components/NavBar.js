import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavIcons from "./NavIcons";

const NavBarContainer = styled.div`
  /*border: 1px solid red; /* RED*/
  min-height: 5vh;
  display: flex;
  padding-top: 5px;
  justify-content: space-between;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 80;
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
