import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavIcons from "./NavIcons";

const NavBarContainer = styled.div`
  border: 1px solid red; /* RED*/
  min-height: 50px;
  display: flex;
  justify-content: space-between;
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
