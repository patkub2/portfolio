import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Orange from "../Orange";
import Border from "../Border";
import Email from "./Email";

import { useSelector } from "react-redux";

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
  const language = useSelector((state) => state);
  if (language) {
    return (
      <ContactContainer>
        <Title>
          Con<Orange>tact</Orange>{" "}
        </Title>
        <Border>
          <Email />
        </Border>
      </ContactContainer>
    );
  }
  return (
    <ContactContainer>
      <Title>
        Kon<Orange>takt</Orange>{" "}
      </Title>
      <Border>
        <Email />
      </Border>
    </ContactContainer>
  );
}

export default Contact;
