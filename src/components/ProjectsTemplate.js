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
`;
const ProjectsText = styled.a`
  /*border: 1px solid yellow; /* RED*/
  font-size: 16px;
  height: 160px;
  padding: 0 12px;
`;
const TechnoDiv = styled.a`
  /*border: 1px solid yellow; /* RED*/

  display: flex;
  justify-content: flex-end;
  flex-flow: wrap;
  margin: 10px;
  width: 100%;
`;

const Techno = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  font-size: 12px;
  padding: 5px 10px;
  margin-right: 10px;
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
      <TechnoDiv>
        {p.tech1 ? <Techno>{p.tech1}</Techno> : null}
        {p.tech2 ? <Techno>{p.tech2}</Techno> : null}
        {p.tech3 ? <Techno>{p.tech3}</Techno> : null}
        {p.tech4 ? <Techno>{p.tech4}</Techno> : null}
      </TechnoDiv>
    </ProjectsTemplateContainer>
  );
}

export default ProjectsTemplate;
