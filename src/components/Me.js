import React from "react";
import styled from "styled-components";
import About from "./About";
import Image from "./Image";
import Tech from "./Tech";
import Orange from "./Orange";

import css from "../img/icons/css.png";
import html from "../img/icons/html.png";
import figma from "../img/icons/figma.png";
import gatsby from "../img/icons/gatsby.png";
import git from "../img/icons/git.png";
import js from "../img/icons/js.png";
import ps from "../img/icons/ps.png";
import react from "../img/icons/react.png";
import sass from "../img/icons/sass.png";
import wp from "../img/icons/wp.png";
import Title from "./Title";
import Border from "./Border";

const MeContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  min-height: 65vh;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-around;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.darker};
`;

function Me() {
  return (
    <MeContainer>
      <Title>
        O <Orange>mnie</Orange>
      </Title>
      <Border>
        <About>
          <p>
            <Orange>
              Cześć nazywam Patryk i jestem Front-end Developerem z Katowic.
            </Orange>{" "}
            Ukończyłem technikum na kierunku Informatyka w Raciborzu gdzie
            nauczyłem się podstaw programowania. Od roku rozwijam się w kierunku
            front-end developmentu wykorzystując <Orange>React’a</Orange>.
          </p>
          <p>
            {" "}
            Swobodnie posługuję się językiem <Orange>angielskim</Orange> (w
            mowie i w piśmie)oraz niemieckim w stopni średnio-zaawansowanym.
          </p>
          <p> Szczegóły zamieściłem w CV oraz na moim profilu Linkedin.</p>
        </About>
        <Tech>
          <Image src={css} name="Css" />
          <Image src={html} name="Html" />
          <Image src={js} name="Js" />
          <Image src={react} name="React" />
          <Image src={gatsby} name="Gatsby" />
          <Image src={git} name="Git" />
          <Image src={ps} name="Photoshop" />
          <Image src={sass} name="Sass" />
          <Image src={figma} name="Figma" />
          <Image src={wp} name="Wordpress" />
        </Tech>
      </Border>
    </MeContainer>
  );
}

export default Me;
