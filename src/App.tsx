import React from "react";
import { Box, Grommet, Main, Heading, Image, Paragraph } from "grommet";
import { Skill } from "./skill";
import { Work } from "./Work";
import { MyHeader } from "./Header";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    height: "100%",
  },
  paragraph: {
    medium: { maxWidth: "800px" },
  },
  anchor: {
    hover: {
      textDecoration: "none",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <MyHeader />
      <Main pad="xlarge">
        <Box
          height="xsmall"
          width="medium"
          direction="row"
          animation={{ type: "fadeIn", delay: 0, duration: 3000 }}
        >
          <Image
            fit="contain"
            src="https://ca.slack-edge.com/T02D9RVN1-UAZ6SCS8Z-110785fffc90-512"
          />
          <Heading alignSelf="center" level="3">
            Yusuke eto's portfolio
          </Heading>
        </Box>
        <Heading level="2" color="neutral-3">
          Carrer
        </Heading>
        <Paragraph margin="none" size="medium">
          2017/04 ~ 2018/05
          <br />
          サーバーサイドエンジニア @ドレミング株式会社
          <br />
          <br />
          2018/06 ~ 現在
          <br />
          サーバーサイドエンジニア @マネーフォワード株式会社
        </Paragraph>
        <Skill />
        <Work />
      </Main>
    </Grommet>
  );
}

export default App;
