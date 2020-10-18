import Head from "next/head";
import React from "react";
import { Layout } from "antd";
import { createGlobalStyle } from "styled-components";

import { Container } from "../styled-components/styles";

const { Header, Content, Footer } = Layout;

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 4em;
  }
  p {
    margin: 0px;
  }
  body {
  }
`;

const Home: React.FC<any> = (): any => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <GlobalStyle />
      <Header>
        <Container>
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "red" }}
          >
            <p>This is Header</p>
          </div>
        </Container>
      </Header>
      <Content>
        <Container>
          <div>
            <p>This is Content</p>
          </div>
        </Container>
      </Content>
      <Footer>
        <Container>
          <div>
            <p>This is Footer</p>
          </div>
        </Container>
      </Footer>
    </>
  );
};

export default Home;
