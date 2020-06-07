import React from "react";
import styled from "styled-components";
import Orange from "./Orange";

const MeTextContainer = styled.div`
  border: 1px solid red; /* RED*/
  min-height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 52px;
  line-height: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

function MeText() {
  return (
    <MeTextContainer>
      <Title>
        O <Orange>mnie</Orange>
      </Title>
    </MeTextContainer>
  );
}

export default MeText;
