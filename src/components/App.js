import React from "react";
import Layout from "./Layout";
import Container from "./Container";
import Main from "./Main/Main";
import Snow from "./Snow";
import NavBar from "./NavBar/NavBar";
import Me from "./Me/Me";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <Layout>
      <Container>
        <Snow />
        <NavBar />
        <Main />
        <Me />
        <Projects />
        <Contact />
      </Container>
    </Layout>
  );
}

export default App;
