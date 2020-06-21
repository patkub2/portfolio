import styled from "styled-components";

const Tech = styled.div`
  /*border: 1px solid green; /* RED*/
  min-height: 20vh;
  padding: 10px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 760px) {
    width: 100vw;
  }
`;
export default Tech;
