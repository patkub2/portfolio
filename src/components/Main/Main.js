import React, { useEffect } from "react";
import styled from "styled-components";
import MainText from "./MainText";
import comp from "../../img/comp.png";
import Arrow from "./Arrow";
import Snow from "../Snow";
import { TimelineLite, Power3 } from "gsap";
const MainContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  background-color: none;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column wrap;
  z-index: 0;
  position: relative;
  /* @media only screen and (max-height: 890px) {
  } */
`;

const Img = styled.img`
  max-width: 500px;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

function Main() {
  useEffect(() => {
    let t1 = new TimelineLite({ delay: 1 });
    t1.from(
      ".comp",
      { y: -35, opacity: 0, ease: Power3.easeOut, delay: 0.3 },
      "Start"
    );
    t1.from(
      ".compa",
      { y: 135, duration: 1, opacity: 0, ease: Power3.easeOut, delay: 1 },
      "Start"
    );
  }, []);

  return (
    <MainContainer className="comp">
      <MainText />
      <Arrow />
      <Img src={comp} className="compa" />
      <Snow />
    </MainContainer>
  );
}

export default Main;
