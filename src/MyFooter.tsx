import React from "react";
import { Footer, Text, Anchor, Box } from "grommet";
import * as Icons from "grommet-icons";

export const MyFooter: React.FC = () => {
  return(
    <Footer pad="medium" direction="column">
      <Box direction="row" justify="center">
      <Anchor
        href="https://github.com/yusuke-eto"
        icon={<Icons.Github size="large" color="palevioletred" />}
      />
      <Anchor
        href="https://twitter.com/tt0km0ztm"
        icon={<Icons.Twitter size="large" color="palevioletred" />}
      />
      <Anchor
        href="https://nasu-engineer.hatenablog.com/"
        icon={<Icons.Blog size="large" color="palevioletred" />}
      />
      <Anchor
        href="https://www.instagram.com/nasu2568/?hl=ja"
        icon={<Icons.Instagram size="large" color="palevioletred" />}
      />
      </Box>
      <Text color="palevioletred">© Yusuke Eto 2020</Text>
    </Footer>
  );
}
