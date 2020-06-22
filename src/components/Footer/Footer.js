import React from "react";
import styled from "styled-components";
import Orange from "./../Orange";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darker};
`;

const FooterText = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lesswhite};
`;

function Footer({ children }) {
  return (
    <FooterContainer>
      <FooterText>© 2020 ALL RIGHTS RESERVED</FooterText>
    </FooterContainer>
  );
}

export default Footer;
