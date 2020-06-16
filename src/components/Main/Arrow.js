import React from "react";
import styled from "styled-components";
import arrow from "../../img/arrow.png";

const ArrowContainer = styled.div`
  /*border: 1px solid yellow; /* RED*/
  position: relative;
  margin-bottom: 10vh;
  animation: mymove 0.9s infinite;
  img {
    width: 60px;
  }

  @keyframes mymove {
    0% {
      top: 0px;
    }
    50% {
      top: 5px;
    }
    100% {
      top: 0px;
    }
  }
`;

function Arrow() {
  return (
    <ArrowContainer>
      <img src={arrow} />
    </ArrowContainer>
  );
}

export default Arrow;
