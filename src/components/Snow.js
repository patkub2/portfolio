import React from "react";
import eclip from "../img/Ellipse4.png";
import styled from "styled-components";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const SnowFlake = styled.p`
  display: inline-block;
  color: white;
  opacity: 0;
  margin: 0;
  padding: 30px;
  animation: up 10s linear infinite;
  user-select: none;

  @keyframes up {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }

    90% {
      opacity: 0.5;
    }
    100% {
      transform: translate(0, -90vh);
      opacity: 0;
    }
  }
`;

const Cont = styled.div`
  position: absolute;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  padding-top: 100vh;
  overflow: hidden;
  z-index: 8;
  height: 0vh;
`;

const Snowflake = (props) => {
  return (
    <SnowFlake id={`item${props.id}`} style={props.style}>
      <img src={eclip} width={getRandomInt(10, 30)} />
    </SnowFlake>
  );
};

class Snow extends React.Component {
  snow = () => {
    let animationDelay = "0s";
    let arr = Array.from("                                               ");
    return arr.map((i) => {
      animationDelay = `${(Math.random() * 10).toFixed(2)}s`;
      let style = {
        animationDelay,
      };
      return <Snowflake key={i} id={i} style={style} />;
    });
  };

  render() {
    return <Cont>{this.snow()}</Cont>;
  }
}

export default Snow;
