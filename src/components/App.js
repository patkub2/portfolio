import React from "react";
import Layout from "./Layout";
import Container from "./Container";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import Me from "./Me/Me";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Layout>
      {/* <Snow /> */}
      <Container>
        <NavBar />

        <Main />

        <Me />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </Layout>
  );
}

export default App;
