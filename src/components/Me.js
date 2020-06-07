import React from "react";
import styled from "styled-components";
import MeText from "./MeText";
import About from "./About";
import css from "../img/css.png";
import html from "../img/html.png";
import figma from "../img/figma.png";
import gatsby from "../img/gatsby.png";
import git from "../img/git.png";
import js from "../img/js.png";
import ps from "../img/ps.png";
import react from "../img/react.png";
import sass from "../img/sass.png";
import wp from "../img/wp.png";
import Image from "./Image";
import Tech from "./Tech";

const MeContainer = styled.div`
  border: 1px solid yellow; /* RED*/
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.darker};
`;

function Me() {
  return (
    <MeContainer>
      <MeText />
      <About>
        <p>
          Cześć nazywam Patryk i jestem Front-end Developerem z Katowic.
          Ukończyłem technikum na kierunku Informatyka w Raciborzu gdzie
          nauczyłem się podstaw programowania. Od roku rozwijam się w kierunku
          front-end developmentu wykorzystując React’a.
        </p>
        <p>
          {" "}
          Swobodnie posługuję się językiem angielskim (w mowie i w piśmie)oraz
          niemieckim w stopni średnio-zaawansowanym.
        </p>
        <p> Szczegóły zamieściłem w CV oraz na moim profilu Linkedin.</p>
      </About>
      <Tech>
        <Image src={css} />
        <Image src={html} />
        <Image src={figma} />
        <Image src={gatsby} />
        <Image src={git} />
        <Image src={js} />
        <Image src={ps} />
        <Image src={react} />
        <Image src={sass} />
        <Image src={wp} />
      </Tech>
    </MeContainer>
  );
}

export default Me;
