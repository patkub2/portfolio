import React from "react";
import styled from "styled-components";
import LogoP from "../LogoP";

const LogoWraper = styled.nav`
  /*border: 1px solid yellow; /* RED*/
  display: flex;
  align-items: center;
  font-size: 22px;
  padding-left: 20px;

  img {
    margin-right: 20px;
  }
`;

const Text = styled.p`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
const SmallText = styled.p`
  display: none;
  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

const Logo = () => {
  return (
    <LogoWraper>
      <LogoP width="35px" />
      <Text>Patryk Kubala</Text>
      <SmallText>PK</SmallText>
    </LogoWraper>
  );
};

export default Logo;
