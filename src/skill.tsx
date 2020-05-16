import React from "react";
import {
  Box,
  Heading,
  Nav,
  Image,
  Paragraph,
} from "grommet";
import rubyLogo from "./ruby.jpg";
import goLogo from "./go.svg";
import tsLogo from "./typescript.svg";
import phpLogo from "./php.svg";
import awsLogo from "./aws.svg";

export function Skill() {
  const Logos = [rubyLogo, goLogo, tsLogo, phpLogo, awsLogo];
  return (
    <>
      <Heading level="2" color="neutral-3">
        Skill
      </Heading>
      <Paragraph>
        I use these skills in my job and private development.
      </Paragraph>
      <Nav direction="row" pad="medium" height="200px" justify="between">
        {Logos.map((logo) => {
          return (
            <Box width="xsmall">
              <Image fit="contain" src={logo} />
            </Box>
          );
        })}
      </Nav>
    </>
  );
}
