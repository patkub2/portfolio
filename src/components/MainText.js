import React from "react";
import styled from "styled-components";
import LogoP from "./LogoP";
import Orange from "./Orange";

const MainTextContainer = styled.div`
  /*border: 1px solid white; /* RED*/
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
  flex-flow: column wrap;
  z-index: 9;
  position: relative;
  background: radial-gradient(
    62% 62% at 50.05% 50%,
    ${({ theme }) => theme.colors.dark} 1.56%,
    rgba(13, 41, 56, 0.851852) 83.85%,
    rgba(13, 41, 56, 0) 100%
  );
`;

const Title = styled.p`
  font-size: 52px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
const Bottom = styled.p`
  font-size: 30px;
  line-height: 20px;

  text-align: center;
  color: ${({ theme }) => theme.colors.orange};
`;
const Info = styled.p`
  font-size: 20px;
  line-height: 0px;

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

function MainText() {
  return (
    <MainTextContainer>
      <LogoP width="70px" />
      <Title>Patryk Kubala</Title>
      <Bottom>Front-end Developer</Bottom>
      <Info>
        Więcej informacji <Orange>o mnie</Orange>
      </Info>
      <Info>
        oraz <Orange>projekty</Orange> znajdziesz poniżej
      </Info>
    </MainTextContainer>
  );
}

export default MainText;
