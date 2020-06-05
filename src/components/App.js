import React from "react";
import Layout from "./Layout";
import Container from "./Container";
import Main from "./Main";
import NavBar from "./NavBar";
import { StickyContainer, Sticky } from "react-sticky";

function App() {
  return (
    <Layout>
      <Container>
        <NavBar />
        <Main />
      </Container>
    </Layout>
  );
}

export default App;
