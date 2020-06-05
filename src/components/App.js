import React from "react";
import Layout from "./Layout";
import Container from "./Container";
import Main from "./Main";
import Snow from "./Snow";
import NavBar from "./NavBar";
import Space from "./Space";

function App() {
  return (
    <Layout>
      <Container>
        <Snow />
        <NavBar />
        <Main />
        <Space />
      </Container>
    </Layout>
  );
}

export default App;
