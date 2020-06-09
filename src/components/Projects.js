import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Orange from "./Orange";
import ProjectsTemplate from "./ProjectsTemplate";
import booktifly from "../img/booktifly.JPG";
import cofferepublic from "../img/cofferepublic.JPG";
import fasttyping from "../img/fasttyping.JPG";

const ProjectsContainer = styled.div`
  border: 1px solid yellow; /* RED*/
  min-height: 100vh;
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
      <ProjectsTemplate title="Book" titleorange="tifly" img={booktifly}>
        Prosta aplikacja pozwalająca na wyszukiwanie książek i otwieranie ich z
        pomocą google books. Aplikacja została stworzona w React i wykorzystuje
        API google books. Do stylowania użyłem styled components.
      </ProjectsTemplate>
      <ProjectsTemplate title="Fast Typing" titleorange="Game" img={fasttyping}>
        Pierwszy więkrzy projekt z wykorzystaniem narzędzi React Hooks. Gra
        która ma za zadanie zmierzenie twojego czasu pisania oraz pokazanie paru
        motywujących losowych cytatów.
      </ProjectsTemplate>
      <ProjectsTemplate
        title="Coffe"
        titleorange="Republic"
        img={cofferepublic}
      >
        Pierwszy więkrzy projekt z wykorzystaniem narzędzi React Hooks. Gra
        która ma za zadanie zmierzenie twojego czasu pisania oraz pokazanie paru
        motywujących losowych cytatów.
      </ProjectsTemplate>
    </ProjectsContainer>
  );
}

export default Projects;
