import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Orange from "./Orange";
import ProjectsTemplate from "./ProjectsTemplate";
import booktifly from "../img/booktifly.JPG";
import cofferepublic from "../img/cofferepublic.JPG";
import fasttyping from "../img/fasttyping.JPG";
import Border from "./Border";

const ContactContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  min-height: 85vh;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-around;
  flex-flow: wrap;
  background-color: ${({ theme }) => theme.colors.darker};
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>
        Kon<Orange>takt</Orange>{" "}
      </Title>
    </ContactContainer>
  );
}

export default Contact;
