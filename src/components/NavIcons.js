import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const NavIconsContainer = styled.div`
  border: 1px solid yellow; /* yellow*/
  min-height: 50px;
`;

function NavIcons() {
  return (
    <NavIconsContainer>
      <Logo />
    </NavIconsContainer>
  );
}

export default NavIcons;
