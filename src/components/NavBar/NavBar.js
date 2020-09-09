import React, { useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import { TimelineLite, Power3 } from "gsap";

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
  useEffect(() => {
    let t1 = new TimelineLite({ delay: 0 });
    t1.from(
      "nav",
      { y: -135, duration: 2, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      "Start"
    );
    t1.from(
      "logo",
      { y: -135, duration: 2, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      "Start"
    );
  }, []);
  return (
    <NavBarContainer>
      <Logo className="logo" />
      <NavIcons className="nav" />
    </NavBarContainer>
  );
}

export default NavBar;
