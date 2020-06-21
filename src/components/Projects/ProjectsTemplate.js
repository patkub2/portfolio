import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Orange from "../Orange";
import github from "../../img/github.svg";

const ProjectsTemplateContainer = styled.div`
  margin: 20px;
  border: 2px solid #f77f00;
  box-sizing: border-box;
  border-radius: 20px;
  min-height: 450px;
  width: 370px;
  display: flex;
  font-size: 18px;
  justify-content: flex-start;
  flex-direction: column;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.dark};

  @media only screen and (max-width: 400px) {
    width: 100vw;
    border: 1px solid #f77f00;
    margin: 0px;
    margin-top: 20px;
  }
`;

const ProjectsTitle = styled.p`
  padding-left: 20px;
  /*border: 1px solid yellow; /* RED*/
  font-size: 30px;
`;
const ProjectsText = styled.p`
  /*border: 1px solid yellow; /* RED*/
  font-size: 16px;
  height: 160px;
  padding: 0 12px;
`;
const TechnoDiv = styled.p`
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.colors.dark};

  border-radius: 20px;
`;

const PictureBorder = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.dark};
  :hover ${Overlay} {
    opacity: 0.9;
  }
`;

const Pic = styled.img`
  box-sizing: border-box;
  border-radius: 15px;
  height: 200px;
  width: 100%;
  @media only screen and (max-width: 400px) {
    border: 1px solid #f77f00;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  position: absolute;
  top: 55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  a {
    color: inherit;
    text-decoration: inherit;
    :hover {
      font-size: 22px;
    }
  }
  img {
    margin: 10px 120px;
    height: 50px;
    :hover {
      height: 45px;
    }
  }
`;

function ProjectsTemplate(p) {
  return (
    <ProjectsTemplateContainer>
      <PictureBorder>
        <Pic src={p.img ? p.img : null} />
        <Overlay>
          <Text>
            <a href={p.livelink} target="_blank">
              LIVE
            </a>
            <a href={p.githublink} target="_blank">
              <img src={github}></img>
            </a>
          </Text>
        </Overlay>
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
