import styled from "styled-components";
const AboutContainer = styled.div`
  /*border: 1px solid green; /* RED*/
  min-height: 30vh;
  width: 750px;
  display: column flex;
  align-items: center;
  justify-content: center;
  padding: 2vh;
  font-size: 16px;

  @media only screen and (max-width: 700px) {
    width: 100vw;
    font-size: 13px;
  }
`;
export default AboutContainer;
