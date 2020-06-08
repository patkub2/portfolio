import React, { useState } from "react";
import styled from "styled-components";
import useToggler from "./useToggler";
const ImgCont = styled.div`
  /*border: 1px solid pink; /* RED*/
  margin: 10px 15px;
  width: 65px;
  min-height: 110px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: wrap;
`;

const Img = styled.img`
  /*border: 1px solid pink; /* RED*/
  width: 60px;
  margin: 10px 15px;
  filter: saturate(0);
  transition: 0.7s;
  :hover {
    filter: saturate(1);
  }
`;

function Image(p) {
  const [show, toggle] = useToggler(false);

  function handleMouseHover() {
    toggle();
  }

  return (
    <ImgCont>
      <Img
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
        src={p.src}
      ></Img>
      {show && <div>{p.name}</div>}
    </ImgCont>
  );
}

export default Image;
