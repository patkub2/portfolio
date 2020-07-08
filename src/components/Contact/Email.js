import React, { useState } from "react";
import styled from "styled-components";
import mail from "../../img/mail.png";
import useToggler from "../useToggler";
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";
import facebook from "../../img/facebook.png";

import { useSelector } from "react-redux";
import Folm from "./Folm";

const EmailContainer = styled.div`
  /*border: 1px solid green; /* green*/
  margin: 0px;
  min-height: 450px;
  width: 600px;
  background-color: ${({ theme }) => theme.colors.darker};
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Mail = styled.input`
  color: white;
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  outline: none;
  background-color: ${({ theme }) => theme.colors.dark};
  background-image: url(${mail});
  background-size: 25px;
  background-position: 10px 7px;
  background-repeat: no-repeat;
  padding-left: 50px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.family.main};
  }
`;

const IconsContainer = styled.div`
  padding: 5vh 0;
  /*border: 1px solid green; /* green*/
  min-height: 50px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 50px;
  margin: 0px 10px;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.darker}; /* green*/
  }
`;

function Email() {
  const [show, toggle] = useToggler(false);
  const [text, setText] = useState("Wyślij");
  const en = show ? text : "Send";
  const pl = show ? text : "Wyślij";

  function handleMouseHoverLinkedIn() {
    setText("LinkedIn");
    toggle();
  }
  function handleMouseHoverGithub() {
    setText("Github");
    toggle();
  }
  function handleMouseHoverFacebook() {
    setText("Facebook");
    toggle();
  }
  /////////////////////////////////////////////////////////////////////////////////
  const language = useSelector((state) => state);
  if (language) {
    return (
      <EmailContainer>
        <Mail
          type="email"
          value="patrykkubala1999@gmail.com"
          readonly
          disabled
        ></Mail>
        <Folm
          emailplaceholder="Your email"
          messageplaceholder="How can I help you?"
          submitplaceholder={en}
        />

        <IconsContainer>
          <Icon
            src={linkedin}
            onMouseEnter={handleMouseHoverLinkedIn}
            onMouseLeave={handleMouseHoverLinkedIn}
          />
          <Icon
            src={github}
            onMouseEnter={handleMouseHoverGithub}
            onMouseLeave={handleMouseHoverGithub}
          />
          <Icon
            src={facebook}
            onMouseEnter={handleMouseHoverFacebook}
            onMouseLeave={handleMouseHoverFacebook}
          />
        </IconsContainer>
      </EmailContainer>
    );
  }
  return (
    <EmailContainer>
      <Mail
        type="email"
        value="patrykkubala1999@gmail.com"
        readonly
        disabled
      ></Mail>
      <Folm
        emailplaceholder="Twój Email"
        messageplaceholder="Jak mogę Ci pomóc?"
        submitplaceholder={pl}
      />

      <IconsContainer>
        <a
          href="https://www.linkedin.com/in/patkub2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src={linkedin}
            onMouseEnter={handleMouseHoverLinkedIn}
            onMouseLeave={handleMouseHoverLinkedIn}
          />
        </a>
        <a
          href="https://github.com/patkub2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src={github}
            onMouseEnter={handleMouseHoverGithub}
            onMouseLeave={handleMouseHoverGithub}
          />
        </a>
        <a
          href="https://www.facebook.com/people/Patryk-Kubala/100010128281851"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src={facebook}
            onMouseEnter={handleMouseHoverFacebook}
            onMouseLeave={handleMouseHoverFacebook}
          />
        </a>
      </IconsContainer>
    </EmailContainer>
  );
}

export default Email;
