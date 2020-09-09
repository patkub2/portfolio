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
    30% {
      opacity: 0.5;
    }

    90% {
      opacity: 0.5;
    }
    100% {
      transform: translate(0, -100vh);
      opacity: 0;
    }
  }
`;

const Cont = styled.div`
  border: 1px solid red; /* RED*/
  position: absolute;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  padding-top: 198vh;
  overflow: hidden;
  z-index: 3;
  height: 1000px;
`;

const Snowflake = (props) => {
  return (
    <SnowFlake id={`item${props.id}`} style={props.style}>
      <img src={eclip} width={getRandomInt(10, 30)} alt="snow" />
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
      return <Snowflake key={i + Math.random()} id={i} style={style} />;
    });
  };

  render() {
    return <Cont>{this.snow()}</Cont>;
  }
}

export default Snow;
