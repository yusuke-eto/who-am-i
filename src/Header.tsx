import React, { useState } from "react";
import { Header, Anchor, Nav, Box, Text } from "grommet";
import { Link, Element } from "react-scroll";
import * as Icons from "grommet-icons";
import headerLogo from "./images/header-background.jpg";
import styled, { keyframes } from "styled-components";
import { Transition } from "react-spring";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${headerLogo});
  background-size: cover !important;
  text-align: center;
  overflow: hidden;
`;

const fadeInFromUnder = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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
`;

const TitleSpan = styled.span`
  font: 90px/1.1em "opensans-bold", sans-serif;
  color: #fff;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
`;

const MyParagraph = styled.h3`
  font: 18px/1.9em "librebaskerville-regular", serif;
  color: #a8a8a8;
  margin: 0 auto;
  width: 70%;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
  animation: ${fadeInFromUnder} 2s ease 0.5s both 1 normal;
`;

const FixedContent = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;
`;

const menuLabels = ["Home", "About", "Carrer"];

export const MyHeader: React.FC = () => {
  const [messages, set] = useState([
    { key: 1, message: "H" },
    { key: 2, message: "e" },
    { key: 3, message: "l" },
    { key: 4, message: "l" },
    { key: 5, message: "o" },
    { key: 6, message: `! ` },
    // { key: 7, message: `` },
    // { key: 8, message: "I" },
    // { key: 9, message: "'" },
    // { key: 10, message: "m" },
    // { key: 11, message: "" },
    // { key: 12, message: "y" },
    // { key: 13, message: "u" },
    // { key: 14, message: "s" },
    // { key: 15, message: "u" },
    // { key: 16, message: "k" },
    // { key: 17, message: "e" },
  ]);

  return (
    <>
      <Container>
        <Element name="Home">
          <FixedContent>
            <Header
              direction="row"
              justify="center"
              margin={{ vertical: "3vh" }}
            >
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
            <Box justify="center" direction="row">
              <Transition
                items={messages}
                keys={(item) => item.key}
                from={{ opacity: 0 }}
                leave={{ opacity: 1 }}
                // from={{ transform: "translate3d(200px,0px,0)" }}
                // to={{ transform: "translate3d(0, 0px,0)" }}
              >
                {(item, index) => (props) => (
                  <TitleSpan style={props}>{item.message}</TitleSpan>
                )}
              </Transition>
            </Box>
          </Banner>
          <Box justify="center" direction="row">
            <Nav
              direction="row"
              alignContent="center"
              pad="medium"
              justify="center"
            >
              <Anchor
                href="https://github.com/yusuke-eto"
                icon={<Icons.Github size="large" color="status-ok" />}
              />
              <Anchor
                href="https://twitter.com/tt0km0ztm"
                icon={<Icons.Twitter size="large" color="status-ok" />}
              />
              <Anchor
                href="https://nasu-engineer.hatenablog.com/"
                icon={<Icons.Blog size="large" color="status-ok" />}
              />
              <Anchor
                href="https://www.instagram.com/nasu2568/?hl=ja"
                icon={<Icons.Instagram size="large" color="status-ok" />}
              />
            </Nav>
          </Box>
        </Element>
      </Container>
    </>
  );
};
