import React from "react";
import Layout from "./Layout";
import Container from "./Container";
import Main from "./Main";
import Snow from "./Snow";
import NavBar from "./NavBar";
import Me from "./Me";
import Projects from "./Projects";

function App() {
  return (
    <Layout>
      <Container>
        <Snow />
        <NavBar />
        <Main />
        <Me />
        <Projects />
      </Container>
    </Layout>
  );
}

export default App;
