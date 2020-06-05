import React from "react";
import styled from "styled-components";
import LogoP from "./LogoP";

const MainTextContainer = styled.div`
  border: 1px solid white; /* RED*/
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15vh;
  flex-flow: column wrap;
`;

const Title = styled.p`
  font-size: 52px;
  line-height: 10px;
  color: ${({ theme }) => theme.colors.white};
`;
const Bottom = styled.p`
  font-size: 30px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.orange};
`;
const Info = styled.p`
  font-size: 20px;
  line-height: 0px;
  color: ${({ theme }) => theme.colors.white};
`;

const Orange = styled.a`
  color: ${({ theme }) => theme.colors.orange};
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
