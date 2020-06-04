import React from "react";
import Layout from "./Layout";
import Container from "./Container";
import Body from "./Body";
import NavBar from "./NavBar";
import { StickyContainer, Sticky } from "react-sticky";

function App() {
  return (
    <Layout>
      <Container>
        <NavBar />
        <Body />
      </Container>
    </Layout>
  );
}

export default App;
