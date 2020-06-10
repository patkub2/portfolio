import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Orange from "./Orange";
import ProjectsTemplate from "./ProjectsTemplate";
import booktifly from "../img/booktifly.JPG";
import cofferepublic from "../img/cofferepublic.JPG";
import fasttyping from "../img/fasttyping.JPG";
import Border from "./Border";

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

function Projects() {
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
        >
          Prosta aplikacja pozwalająca na wyszukiwanie książek i otwieranie ich
          z pomocą google books. Aplikacja została stworzona w React i
          wykorzystuje API google books. Do stylowania użyłem styled components.
        </ProjectsTemplate>
        <ProjectsTemplate
          title="Fast Typing"
          titleorange=" Game"
          img={fasttyping}
          tech1="react"
          tech2="hooks"
          tech3="RWD"
        >
          Pierwszy więkrzy projekt z wykorzystaniem narzędzi React Hooks. Gra
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
        >
          Przykładowa strona kawiarni wykonana z GatsbyJS do stylowania
          wykorzystaniem styled components ubogacone w flex box'a i css grid'a
        </ProjectsTemplate>
      </Border>
    </ProjectsContainer>
  );
}

export default Projects;
