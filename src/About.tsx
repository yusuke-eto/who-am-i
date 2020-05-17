import React from "react";
import {
  Avatar,
  Box,
  Main,
  Grid,
  Heading,
  Paragraph,
  Nav,
  Image,
} from "grommet";
import { Element } from "react-scroll";
import styled from "styled-components";
import rubyLogo from "./images/ruby.svg";
import goLogo from "./images/go.svg";
import tsLogo from "./images/typescript.svg";
import phpLogo from "./images/php.svg";
import awsLogo from "./images/aws.svg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const IconBox = styled.div`
  margin: 50px auto;
`;
const Logos = [rubyLogo, goLogo, tsLogo, phpLogo, awsLogo];

export const About: React.FC = () => {
  return (
    <Container>
      <Element name="About">
        <Main pad="xlarge" background="dark-2">
          <Grid
            rows={["medium", "medium"]}
            columns={["medium", "xlarge"]}
            gap="small"
            justify="stretch"
            fill={true}
            areas={[
              { name: "icon", start: [0, 0], end: [0, 1] },
              { name: "paragraph", start: [1, 0], end: [1, 0] },
              { name: "skills", start: [1, 1], end: [1, 1] },
            ]}
          >
            <Box gridArea="icon">
              <IconBox>
                <Avatar
                  size="xlarge"
                  src="https://ca.slack-edge.com/T02D9RVN1-UAZ6SCS8Z-110785fffc90-512"
                />
              </IconBox>
            </Box>
            <Box gridArea="paragraph">
              <Heading level="3" color="light-1">
                Abount me
              </Heading>
              <Paragraph color="light-1">
                卓球をこよなく愛する福岡在住のエンジニア
                <br />
                現職ではRuby, Rails を使ったサーバーサイドの実装をやっています
                <br />
                フロントエンド、インフラ周りにも興味がありReact, AWS
                周りも挑戦中です
              </Paragraph>
            </Box>
            <Box gridArea="skills">
              <Heading level="3" color="light-1">
                Skills
              </Heading>
              <Nav
                direction="row"
                pad="medium"
                height="200px"
                justify="between"
              >
                {Logos.map((logo) => {
                  return (
                    <Box width="xsmall">
                      <Image fit="contain" src={logo} />
                    </Box>
                  );
                })}
              </Nav>
            </Box>
          </Grid>
        </Main>
      </Element>
    </Container>
  );
};
