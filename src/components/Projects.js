import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  border: 1px solid yellow; /* RED*/
  min-height: 60vh;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-around;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.dark};
`;

function Projects() {
  return <ProjectsContainer></ProjectsContainer>;
}

export default Projects;
