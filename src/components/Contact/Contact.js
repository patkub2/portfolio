import React, { useEffect } from "react";
import styled from "styled-components";
import Title from "../Title";
import Orange from "../Orange";
import Border from "../Border";
import Email from "./Email";

import { useSelector } from "react-redux";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power3 } from "gsap";
gsap.registerPlugin(ScrollTrigger);

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
  useEffect(() => {
    gsap.from(
      ".contact",
      {
        duration: 1,
        y: 35,
        opacity: 0,
        ease: Power3,
        scrollTrigger: {
          trigger: ".con",
          start: "top 100%",
          end: "bottom 100%",
          toggleActions: "complete restart reverse reset",
        },
      },
      "End"
    );
  }, []);

  const language = useSelector((state) => state);
  if (language) {
    return (
      <ContactContainer>
        <div className="con"></div>
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
      <div className="con"></div>
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
