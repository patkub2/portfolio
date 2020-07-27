import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Orange from "../Orange";
import ProjectsTemplate from "./ProjectsTemplate";
import booktifly from "../../img/booktifly.JPG";
import cofferepublic from "../../img/cofferepublic.JPG";
import fasttyping from "../../img/fasttyping.JPG";
import portfolio from "../../img/portfolio.JPG";

import { useSelector } from "react-redux";

const ProjectsContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  padding-bottom: 30px;
  min-height: 85vh;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-around;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const Border = styled.div`
  /*border: 1px solid yellow; /* RED*/
  width: 2400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: wrap;
  @media only screen and (max-width: 2300px) {
    width: 1900px;
  }
`;

function Projects() {
  const language = useSelector((state) => state);
  if (language) {
    return (
      <ProjectsContainer>
        <Title>
          My <Orange>Projects</Orange>{" "}
        </Title>
        <Border>
          <ProjectsTemplate
            title="Book"
            titleorange="tifly"
            img={booktifly}
            tech1="react"
            tech2="API"
            tech3="RWD"
            livelink="https://patkub2-booktlify.netlify.app"
            githublink="https://github.com/patkub2/booktifly"
          >
            A simple application that allows you to search for books and open
            them with the help of google books. The application was created in
            React and uses the google books API. I used styled for styling
            components with flexbox.
          </ProjectsTemplate>
          <ProjectsTemplate
            title="Fast Typing"
            titleorange=" Game"
            img={fasttyping}
            tech1="react"
            tech2="hooks"
            tech3="RWD"
            livelink="https://patkub2-fast-typing-game.netlify.app"
            githublink="https://github.com/patkub2/fast-typing-game"
          >
            The first major project using React Hooks tools. A game that is
            designed to measure your writing time and show some motivating
            random quotes.
          </ProjectsTemplate>
          <ProjectsTemplate
            title="Coffe"
            titleorange="Republic"
            img={cofferepublic}
            tech1="react"
            tech2="gatsby"
            tech3="RWD"
            livelink="https://patkub2-coffeshop.netlify.app"
            githublink="https://github.com/patkub2/coffe-shop"
          >
            An example of a cafe site made of GatsbyJS for styling I used
            styled-components with flex box and css grid'a. The site is still
            under construction.
          </ProjectsTemplate>
          <ProjectsTemplate
            title="Port"
            titleorange="folio"
            img={portfolio}
            tech1="react"
            tech2="redux"
            tech3="RWD"
            livelink="/"
            githublink="https://github.com/patkub2/portfolio"
          >
            Portfolio page made in react. Redux has been used to change the
            language of the page without having to refresh it. Down styling I
            used styled-components.
          </ProjectsTemplate>
        </Border>
      </ProjectsContainer>
    );
  }
  return (
    <ProjectsContainer>
      <Title>
        Moje <Orange>Projekty</Orange>{" "}
      </Title>
      <Border>
        <ProjectsTemplate
          title="Book"
          titleorange="tifly"
          img={booktifly}
          tech1="react"
          tech2="API"
          tech3="RWD"
          livelink="https://patkub2-booktlify.netlify.app"
          githublink="https://github.com/patkub2/booktifly"
        >
          Prosta aplikacja pozwalająca na wyszukiwanie książek i otwieranie ich
          z pomocą google books. Aplikacja została stworzona w React i
          wykorzystuje API google books. Do stylowania użyłem styled components
          z flexboxem.
        </ProjectsTemplate>
        <ProjectsTemplate
          title="Fast Typing"
          titleorange=" Game"
          img={fasttyping}
          tech1="react"
          tech2="hooks"
          tech3="RWD"
          livelink="https://patkub2-fast-typing-game.netlify.app"
          githublink="https://github.com/patkub2/fast-typing-game"
        >
          Pierwszy większy projekt z wykorzystaniem narzędzi React Hooks. Gra
          która ma za zadanie zmierzenie twojego czasu pisania oraz pokazanie
          paru motywujących losowych cytatów.
        </ProjectsTemplate>
        <ProjectsTemplate
          title="Coffe"
          titleorange="Republic"
          img={cofferepublic}
          tech1="react"
          tech2="gatsby"
          tech3="RWD"
          livelink="https://patkub2-coffeshop.netlify.app"
          githublink="https://github.com/patkub2/coffe-shop"
        >
          Przykładowa strona kawiarni wykonana z GatsbyJS do stylowania
          wykorzystaniem styled components ubogacone w flex box'a i css grid'a.
          Strona jest wciąż w trakcie budowania.
        </ProjectsTemplate>
        <ProjectsTemplate
          title="Port"
          titleorange="folio"
          img={portfolio}
          tech1="react"
          tech2="redux"
          tech3="RWD"
          livelink="/"
          githublink="https://github.com/patkub2/portfolio"
        >
          Strona portfolio wykonana w reactcie. Redux został wykorzystany do
          zmiany języka strony bez potrzeby odświeżania jej. Do stylowania
          użyłem styled-components.
        </ProjectsTemplate>
      </Border>
    </ProjectsContainer>
  );
}

export default Projects;
