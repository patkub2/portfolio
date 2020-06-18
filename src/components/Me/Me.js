import React from "react";
import styled from "styled-components";
import About from "./About";
import Image from "./Image";
import Tech from "./Tech";
import Orange from "../Orange";

import css from "../../img/icons/css.png";
import html from "../../img/icons/html.png";
import figma from "../../img/icons/figma.png";
import gatsby from "../../img/icons/gatsby.png";
import git from "../../img/icons/git.png";
import js from "../../img/icons/js.png";
import ps from "../../img/icons/ps.png";
import react from "../../img/icons/react.png";
import sass from "../../img/icons/sass.png";
import wp from "../../img/icons/wp.png";
import Title from "../Title";
import Border from "../Border";

import { useSelector } from "react-redux";

const MeContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  min-height: 60vh;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-around;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.darker};
`;

function Me() {
  const language = useSelector((state) => state);
  if (language) {
    return (
      <MeContainer>
        <Title>
          About <Orange>me</Orange>
        </Title>
        <Border>
          <About>
            <p>
              <Orange>
                Hi, I'm Patryk and I'm a Front-end Developer from Katowice.
              </Orange>{" "}
              I graduated from the technical college in Computer Science in
              Racibórz where I gained the necessary basic knowledge about
              computers, networks and programming. For a year I have been
              passionate about front-end developeloping and I develop in it
              mainly using <Orange>React</Orange>.
            </p>
            <p>
              {" "}
              Moim hobby jest także grafika kompuerowa i edycja za pomocą
              photoshopa{" "}
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
            Ukończyłem technikum na kierunku Informatycznym w Raciborzu gdzie
            zdobyłem niezbedną podstawową wiedzę odnośnie komputerów , sieci i
            programowania. Od roku pasjonuje mnie front-end developerka i to w
            niej się rozwijam wykorzystując głównie <Orange>React’a</Orange>.
          </p>
          <p>
            {" "}
            Moim hobby jest także grafika kompuerowa i edycja za pomocą
            photoshopa{" "}
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
