import React from "react";
import styled from "styled-components";

const ImgCont = styled.img`
  /*border: 1px solid pink; /* RED*/
  width: 70px;
  margin: 10px 15px;
`;

function Image(p) {
  return <ImgCont src={p.src}></ImgCont>;
}

export default Image;
