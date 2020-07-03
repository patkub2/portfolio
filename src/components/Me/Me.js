import React from "react";
import styled from "styled-components";
import About from "./About";
import Image from "./Image";
import Tech from "./Tech";
import Orange from "../Orange";
import Title from "../Title";
import Border from "../Border";

import css from "../../img/icons/css.png";
import html from "../../img/icons/html.png";
import figma from "../../img/icons/figma.png";
import git from "../../img/icons/git.png";
import js from "../../img/icons/js.png";
import ps from "../../img/icons/ps.png";
import react from "../../img/icons/react.png";
import sass from "../../img/icons/sass.png";
import wp from "../../img/icons/wp.png";
import redux from "../../img/icons/redux.png";

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
              I graduated from IT school in Racibórz, where I gained the
              necessary basic knowledge about computers, networks and
              programming. A year ago I decided to delve into the worl of
              front-end development and to this day I am still absorbed by it,
              mainly thanks to the
              <Orange> React</Orange> library.
            </p>
            <p>
              {" "}
              I also do computer graphics as a hobby. Mainly painting and
              so-called photobashing. But also designing websites, business
              cards, posters and logos.{" "}
            </p>
            <p>
              {" "}
              I speak <Orange>English</Orange> fluently (spoken and written) and
              German at intermediate levels.
            </p>
            <p>
              {" "}
              I included the rest of the details in my CV and on my{" "}
              <Orange
                href="https://www.linkedin.com/in/patryk-kubala-a9730b1a2/"
                target="_blank"
              >
                Linkedin{" "}
              </Orange>
              profile.
            </p>
          </About>
          <Tech>
            <Image src={css} name="Css" />
            <Image src={html} name="Html" />
            <Image src={js} name="Js" />
            <Image src={react} name="React" />
            <Image src={git} name="Git" />
            <Image src={ps} name="Photoshop" />
            <Image src={sass} name="Sass" />
            <Image src={figma} name="Figma" />
            <Image src={wp} name="Wordpress" />
            <Image src={redux} name="Redux" />
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
              Cześć mam na imię Patryk i jestem Front-end Developerem z Katowic.
            </Orange>{" "}
            Ukończyłem technikum na kierunku Informatycznym w Raciborzu gdzie
            zdobyłem niezbędną podstawową wiedzę odnośnie komputerów, sieci i
            programowania. Roku temu postanowiłem zagłębić się front-end
            developerkę i to w niej do dzisiaj się rozwijam korzystając głownie
            z biblioteki <Orange>React’a</Orange>.
          </p>
          <p>
            {" "}
            Na co dzień zajmuję się także grafiką. Głównie malowaniem i tzw.
            photobashingiem. Ale także projektowaniem przeróżnych stron,
            wizytówek , plakatów i logo.{" "}
          </p>
          <p>
            {" "}
            Swobodnie posługuję się językiem <Orange>angielskim</Orange> (w
            mowie i w piśmie) oraz niemieckim w stopni średnio-zaawansowanym.
          </p>
          <p>
            Resztę informacji zamieściłem w CV oraz na moim profilu{" "}
            <Orange
              href="https://www.linkedin.com/in/patryk-kubala-a9730b1a2/"
              target="_blank"
            >
              Linkedin
            </Orange>
            .
          </p>
        </About>
        <Tech>
          <Image src={css} name="Css" />
          <Image src={html} name="Html" />
          <Image src={js} name="Js" />
          <Image src={react} name="React" />
          <Image src={git} name="Git" />
          <Image src={ps} name="Photoshop" />
          <Image src={sass} name="Sass" />
          <Image src={figma} name="Figma" />
          <Image src={wp} name="Wordpress" />
          <Image src={redux} name="Redux" />
        </Tech>
      </Border>
    </MeContainer>
  );
}

export default Me;
