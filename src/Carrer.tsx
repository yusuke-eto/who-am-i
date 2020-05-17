import React from "react";
import { Box, Main, Grid, Heading, Paragraph } from "grommet";
import { Element } from "react-scroll";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export function Carrer() {
  return (
    <Container>
      <Element name="Carrer">
        <Main pad="xlarge">
          <Wrapper>
            <Grid
              rows={["small", "small", "small"]}
              columns={["xsmall", "small", "xlarge"]}
              gap="small"
              areas={[
                { name: "title", start: [1, 0], end: [1, 1] },
                { name: "paragraph", start: [2, 0], end: [2, 0] },
                { name: "skills", start: [2, 1], end: [2, 1] },
                { name: "now", start: [2, 2], end: [2, 2] },
              ]}
            >
              <Box gridArea="title">
                <Heading level="2" color="neutral-1">
                  Carrer
                </Heading>
              </Box>
              <Box gridArea="paragraph">
                <Heading level="3">2017/03</Heading>
                <Paragraph>
                  九州大学農学部を卒業 大学では農政経済を専攻する
                </Paragraph>
              </Box>
              <Box gridArea="skills">
                <Heading level="3">2017/03 ~ 2018/05</Heading>
                <Paragraph>
                  @ドレミング株式会社
                  <br />
                  PHP, Symfony を使って勤怠・給与計算のSassを開発していました。
                </Paragraph>
              </Box>
              <Box gridArea="now">
                <Heading level="3">2018/06 ~ 現在</Heading>
                <Paragraph>
                  @マネーフォワード株式会社
                  <br />
                  Ruby, Rails を使って経費精算のSassを開発しています。
                </Paragraph>
              </Box>
            </Grid>
          </Wrapper>
        </Main>
      </Element>
    </Container>
  );
}
