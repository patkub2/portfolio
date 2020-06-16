import React, { useState } from "react";
import styled from "styled-components";
import mail from "../../img/mail.png";
import useToggler from "../useToggler";
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";
import facebook from "../../img/facebook.png";

const EmailContainer = styled.div`
  margin: 0px;
  min-height: 450px;
  width: 600px;
  background-color: ${({ theme }) => theme.colors.darker};
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  @media only screen and (max-width: 400px) {
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

const Message = styled.textarea`
  color: white;
  width: 90%;
  padding: 12px 12px;
  margin: 8px 0;
  height: 300px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  resize: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.dark};
  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.family.main};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darker};
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  outline: none;
  padding: 15px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 40px;
  cursor: pointer;
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

  return (
    <EmailContainer>
      <Mail type="email" placeholder="Twój email"></Mail>
      <Message placeholder="W czym mogę Ci pomóc?"></Message>
      <Button>{show ? <div>{text}</div> : <div>Wyślij</div>}</Button>
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

export default Email;
