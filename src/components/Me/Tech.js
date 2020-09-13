import styled from "styled-components";

const Tech = styled.div`
  /*border: 1px solid green; /* RED*/
  min-height: 20vh;
  padding: 10px 0;
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 760px) {
    width: 90vw;
  }
`;
export default Tech;
