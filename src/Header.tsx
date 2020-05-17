import React from "react";
import { Header, Anchor, Nav, Box, Text } from "grommet";
import { Link, Element } from "react-scroll";
import * as Icons from "grommet-icons";
import headerLogo from "./images/header-background.jpg";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${headerLogo});
  background-size: cover !important;
  text-align: center;
  overflow: hidden;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Banner = styled.div`
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 15vw;
  }
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  width: 85%;
  padding-bottom: 30px;
  text-align: center;
  animation: ${fadeIn} 3s ease 0s 1 normal;
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

const FixedContent = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;
`;

export const MyHeader: React.FC = () => {
  const menuLabels = ["Home", "About", "Carrer", "Works"];

  return (
    <Container>
      <Element name="Home">
        <FixedContent>
          <Header direction="row" justify="center" margin={{ vertical: "3vh" }}>
            {menuLabels.map((menuLabel) => {
              return (
                <Link
                  activeClass="active"
                  to={menuLabel}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  delay={100}
                >
                  <Text color="light-1" size="large" margin="large">
                    {menuLabel}
                  </Text>
                </Link>
              );
            })}
          </Header>
        </FixedContent>
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
      </Element>
    </Container>
  );
};
