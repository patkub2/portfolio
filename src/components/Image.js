import React from "react";
import styled from "styled-components";

const ImgCont = styled.img`
  border: 1px solid pink; /* RED*/
  height: 70px;
`;

function Image(p) {
  return <ImgCont src={p.src}></ImgCont>;
}

export default Image;
