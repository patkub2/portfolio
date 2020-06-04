import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const NavBarContainer = styled.div`
  border: 1px solid red; /* RED*/
  min-height: 50px;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <Logo />
    </NavBarContainer>
  );
}

export default NavBar;
