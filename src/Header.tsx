import React from "react";
import { Header, Anchor, Nav, Box } from "grommet";
import * as Icons from "grommet-icons";
import headerLogo from "./header-background.jpg";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 800px;
  min-height: 500px;
  width: 100%;
  height: 100%;
  background-image: url(${headerLogo});
  background-size: cover !important;
  text-align: center;
  overflow: hidden;
`;

const Banner = styled.div`
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 150px;
  }
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  width: 85%;
  padding-bottom: 30px;
  text-align: center;
`;

const Title = styled.div`
  font: 90px/1.1em "opensans-bold", sans-serif;
  color: #fff;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
`;

const MyParagraph = styled.h3`
  font: 18px/1.9em "librebaskerville-regular", serif;
  color: #a8a8a8;
  margin: 0 auto;
  width: 70%;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
`;

export function MyHeader() {
  const menuLabels = ["Home", "About", "Carrer", "Works"];

  return (
    <Container>
      <Header direction="row" justify="center">
        {menuLabels.map((menuLabel) => {
          return (
            <Anchor
              href="#"
              color="light-1"
              size="large"
              margin="medium"
              label={menuLabel}
            />
          );
        })}
      </Header>
      <Banner>
        <div className="banner-text">
          <Title>Hello!! I'm yusuke.</Title>
          <MyParagraph>
            I'm a based Fukuoka. <br />I works as a software engineer.
          </MyParagraph>
          <ul className="social"></ul>
        </div>
      </Banner>

      <Box justify="center" direction="row">
        <Nav
          direction="row"
          alignContent="center"
          pad="medium"
          justify="center"
        >
          <Anchor icon={<Icons.Github size="large" color="status-ok" />} />
          <Anchor icon={<Icons.Twitter size="large" color="status-ok" />} />
          <Anchor icon={<Icons.Blog size="large" color="status-ok" />} />
          <Anchor icon={<Icons.Instagram size="large" color="status-ok" />} />
        </Nav>
      </Box>
    </Container>
  );
}
