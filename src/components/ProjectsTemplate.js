import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Orange from "./Orange";

const ProjectsTemplateContainer = styled.div`
  border: 2px solid #f77f00;
  box-sizing: border-box;
  border-radius: 20px;
  min-height: 450px;
  width: 400px;
  display: flex;
  font-size: 18px;
  justify-content: flex-start;
  flex-direction: column;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const PictureBorder = styled.div`
  box-sizing: border-box;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const Pic = styled.img`
  border: 2px solid #f77f00;
  box-sizing: border-box;
  border-radius: 15px;
  height: 200px;
  width: 100%;
`;

const ProjectsTitle = styled.p`
  padding-left: 20px;
  /*border: 1px solid yellow; /* RED*/
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
`;
const ProjectsTitleOrange = styled.a`
  /*border: 1px solid yellow; /* RED*/
  font-size: 30px;
  color: ${({ theme }) => theme.colors.orange};
`;
const ProjectsText = styled.a`
  /*border: 1px solid yellow; /* RED*/
  font-size: 16px;
  height: 160px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.white};
`;
function ProjectsTemplate(p) {
  return (
    <ProjectsTemplateContainer>
      <PictureBorder>
        <Pic src={p.img ? p.img : null} />
      </PictureBorder>
      <ProjectsTitle>
        {p.title ? p.title : null}
        <Orange>{p.titleorange ? p.titleorange : null}</Orange>
      </ProjectsTitle>
      <ProjectsText>{p.children ? p.children : null}</ProjectsText>
    </ProjectsTemplateContainer>
  );
}

export default ProjectsTemplate;
