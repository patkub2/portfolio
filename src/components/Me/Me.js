import React, { useEffect } from "react";
import styled from "styled-components";
import About from "./About";
import Image from "./Image";
import Tech from "./Tech";
import Orange from "../Orange";
import Title from "../Title";
import Border from "../Border";
import { gsap } from "gsap";

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
import node from "../../img/icons/node.png";
import mongodb from "../../img/icons/mongodb.png";
import ts from "../../img/icons/ts.png";
import npm from "../../img/icons/npm.png";
import gsapi from "../../img/icons/gsap.png";

import cv from "../../pdf/CV.pdf";

import { useSelector } from "react-redux";
import Button from "./Button";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MeContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  min-height: 60vh;
  display: flex;
  font-size: 18px;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.darker};
  z-index: 90;
`;

const ButtonContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  display: flex;
  font-size: 18px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.darker};
`;

// const TechnoTitle = styled.div`
//   /*border: 1px solid yellow; /* RED*/

//   width: 100%;
//   display: flex;
//   font-size: 20px;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.colors.darker};
//   p {
//   }
// `;

function Me() {
  useEffect(() => {
    gsap.defaults({ ease: "power3" });
    gsap.set(".icon", { y: 50, opacity: 0 });
    gsap.set(".about", { y: 0, opacity: 0 });

    ScrollTrigger.batch(".icon", {
      interval: 0.1, // time window (in seconds) for batching to occur.
      //batchMax: 3,   // maximum batch size (targets)
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          overwrite: true,
        }),
    });
    ScrollTrigger.batch(".about", {
      interval: 0.5, // time window (in seconds) for batching to occur.
      //batchMax: 3,   // maximum batch size (targets)
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          overwrite: true,
        }),
    });
    ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set(".box", { y: 0 })
    );
  }, []);

  const language = useSelector((state) => state);
  if (language) {
    return (
      <MeContainer>
        <Title>
          About <Orange>me</Orange>
        </Title>
        <Border>
          <About className="about">
            <p>
              <Orange>
                Hi, I'm Patryk and I'm a Front-end Developer from Raciborz.
              </Orange>{" "}
              I graduated from IT school in Racibórz, where I gained the
              necessary basic knowledge about computers, networks and
              programming. From October I am starting daily studies in Computer
              Science. A year ago I decided to delve into the world of front-end
              development and to this day I am still fascinated by it, mainly
              thanks to the
              <Orange> React</Orange> library.
            </p>
            <p>
              {" "}
              I also do computer graphics as a hobby. Mainly painting and
              so-called photobashing. But also designing websites, business
              cards and logos.{" "}
            </p>
            <p>
              {" "}
              I know spoken and written <Orange>English</Orange> at a great
              level and German at an intermediate level.
            </p>
            <p>
              {" "}
              I included the rest of the details in my <Orange>CV</Orange> and
              on my{" "}
              <Orange
                href="https://www.linkedin.com/in/patryk-kubala-a9730b1a2/"
                target="_blank"
              >
                Linkedin{" "}
              </Orange>
              profile.
            </p>
            <ButtonContainer>
              <Button href={cv} target="_blank">
                CV
              </Button>
              <Button
                href="https://www.linkedin.com/in/patkub2/"
                target="_blank"
              >
                Linkedin
              </Button>
            </ButtonContainer>
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
            <Image src={mongodb} name="Mongodb" />
            <Image src={node} name="Node" />
            <Image src={ts} name="TypeScript" />
            <Image src={npm} name="Npm" />
            <Image src={gsapi} name="Gsap" />
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
        <About className="about">
          <p>
            <Orange>
              Cześć mam na imię Patryk i jestem Front-end Developerem z
              Raciborza.
            </Orange>{" "}
            Ukończyłem technikum na kierunku Informatycznym w Raciborzu gdzie
            zdobyłem niezbędną podstawową wiedzę odnośnie komputerów, sieci i
            programowania. Od października zaczynam studia dzienne na kierunku
            Informatyka. Roku temu postanowiłem zagłębić się w front-end
            developerkę i to w niej do dzisiaj się rozwijam korzystając głownie
            z biblioteki <Orange>React’a</Orange>.
          </p>
          <p>
            {" "}
            Na co dzień zajmuję się także grafiką komputerową. Głównie
            malowaniem i tzw. photobashingiem ale także projektowaniem
            przeróżnych stron, wizytówek i logo.{" "}
          </p>
          <p>
            {" "}
            Swobodnie posługuję się językiem <Orange>angielskim</Orange> (w
            mowie i w piśmie) oraz niemieckim w stopniu średnim.
          </p>
          <p>
            Resztę informacji zamieściłem w <Orange>CV</Orange> oraz na moim
            profilu{" "}
            <Orange
              href="https://www.linkedin.com/in/patryk-kubala-a9730b1a2/"
              target="_blank"
            >
              Linkedin
            </Orange>
            .
          </p>
          <ButtonContainer>
            <Button href={cv} target="_blank">
              CV
            </Button>
            <Button href="https://www.linkedin.com/in/patkub2/" target="_blank">
              Linkedin
            </Button>
          </ButtonContainer>
        </About>

        <Tech>
          {/* <TechnoTitle>
            <p>Technologie z których korzystam</p>
          </TechnoTitle> */}
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
          <Image src={mongodb} name="Mongodb" />
          <Image src={node} name="Node" />
          <Image src={ts} name="TypeScript" />
          <Image src={npm} name="Npm" />
          <Image src={gsapi} name="Gsap" />
        </Tech>
      </Border>
    </MeContainer>
  );
}

export default Me;
