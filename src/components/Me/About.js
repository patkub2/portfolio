import styled from "styled-components";
const AboutContainer = styled.div`
  /*border: 1px solid green; /* RED*/
  min-height: 30vh;
  max-width: 750px;
  display: column flex;
  align-items: center;
  justify-content: center;
  padding: 2vh 0px;
  padding-bottom: 40px;
  font-size: 16px;
  p {
    padding: 0px;
  }

  @media only screen and (max-width: 700px) {
    width: 90vw;
    font-size: 13px;
  }
`;
export default AboutContainer;
