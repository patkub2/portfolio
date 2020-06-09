import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  /*border: 1px solid red; /* RED*/
  min-height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.p`
  font-size: 52px;
  line-height: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

function Title({ children }) {
  return (
    <TitleContainer>
      <TitleText>{children}</TitleText>
    </TitleContainer>
  );
}

export default Title;
