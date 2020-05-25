import React, { useContext } from "react";
import { Heading, Box, Grid, Text, Paragraph, ResponsiveContext } from "grommet";
import { Star } from "grommet-icons";
import { GiDiscussion, GiStairsGoal } from "react-icons/gi";
import styled from "styled-components";

const Container = styled(Box)`
  width: 100vw;
  padding: 0 0 5vh 0;
`;

const StyledStar = styled(Star)`
  align-self: center;
  padding: 0 1vw;
`;

type TFeatureItems = {
  size: string
}

const FeatureItems: React.FC<TFeatureItems> = ({size}) => {
  return (
    <>
      <Box gridArea="left">
        <Box align="center" margin={{ vertical: "3vh" }}>
          <Text textAlign="center" weight="bold" margin={{ bottom: "2vh" }}>
            妥協せず話し合います
          </Text>
          <GiDiscussion size="150" />
        </Box>
        <Box pad={(size == 'small' || size == 'medium') ? { horizontal: "2vh"} : {} }>
          <Paragraph margin={{ horizontal: "2vw" }}>
            本当にいいプロダクトを作る上では、
            <br />
            1. アイデアのブラッシュアップ
            <br />
            2. ゴールの共有
            <br />
            の為のディスカッションが必須だと考えています。
          </Paragraph>
        </Box>
      </Box>
      <Box gridArea="right">
        <Box align="center" margin={{ vertical: "3vh" }}>
          <Text textAlign="center" weight="bold" margin={{ bottom: "2vh" }}>
            技術力向上に拘ります
          </Text>
          <GiStairsGoal size="150" />
        </Box>
        <Box pad={(size == 'small' || size == 'medium') ? { horizontal: "2vh"} : {} }>
          <Paragraph margin={{ horizontal: "2vw" }}>
            現在は Ruby, Railsを使った業務 がメインですが、 Go, React, Aws
            など色々なものに興味があり、挑戦したいと思っています。
          </Paragraph>
        </Box>
      </Box>
    </>
  )
}

export const Feature: React.FC = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Container background="lightblue">
      <Box direction="row" justify="center" pad={{ top: "5vh" }}>
        <StyledStar color="yellow" />
        <Heading level="3" textAlign="center" margin="none">
          STRENGTH
        </Heading>
      </Box>
      <Box alignSelf="center">
        { 
          (size != 'small' && size != 'medium' ) ? (
            <Grid
              rows={["medium"]}
              columns={["medium", "medium"]}
              gap="medium"
              // @note ここの padding 指定は top だけでもいいかも
              pad={{ vertical: "5vh" }}
              areas={[
                { name: "left", start: [0, 0], end: [0, 0] },
                { name: "right", start: [1, 0], end: [1, 0] },
              ]}
            >
              <FeatureItems size={size}/>
            </Grid>
          ) : (
            <Box alignSelf="center">
              <FeatureItems size={size}/>
            </Box>
          )
        }
      </Box>
    </Container>
  );
};
