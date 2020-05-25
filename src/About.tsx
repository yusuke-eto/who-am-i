import React, {useContext} from "react";
import { Avatar, Box, Grid, Heading, Paragraph, Button, ResponsiveContext } from "grommet";
import { Star } from "grommet-icons";
import { Element } from "react-scroll";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";

const Container = styled.div`
  width: 100vw;
  height: 65vh;
  background-color: #add8e6;
`;

const MobileContainer = styled.div`
  height: 130vh;
  background-color: #add8e6;
  padding: 0 4vw;
`;

const IconBox = styled.div`
  margin: 0 auto;
`;

const StyledParagraph = styled(Paragraph)`
  font-family: "Noto Sans Japanese";
  line-height: 2;
`;

const StyledStar = styled(Star)`
  align-self: center;
  padding: 0 1vw;
`;

const StyledButton = styled(Button)`
  background-color: #f2f2f2;
`;

const SkillItem = styled.div`
  border-radius: 5%;
  background-color: #f2f2f2;
`

export const About: React.FC = () => {
  const size = useContext(ResponsiveContext);
  return (
    <>
      { (size != 'small' && size != 'medium' ) &&
        <Container>
            <Box
            align="center"
            justify="center"
            direction="row"
            pad={{ vertical: "7vh" }}
          >
            <Heading color="palevioletred" alignSelf="center">
              ABOUT ME
            </Heading>
          </Box>
        <Box pad={{ horizontal: "7vw" }}>
          <Grid
            rows={["small", "small"]}
            columns={["small", "large"]}
            gap="small"
            // ボックスに含まれおり、中央寄せしたい時は
            // alignSelf で中央寄せの指定が出来る
            alignSelf="center"
            areas={[
              { name: "icon", start: [0, 0], end: [0, 0] },
              { name: "paragraph", start: [1, 0], end: [1, 0] },
              { name: "skills", start: [0, 1], end: [1, 1] },
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
              <StyledParagraph margin="none">
                福岡のサーバーサイドエンジニア
                <br />
                <br />
                <strong>20016年:</strong>
                就職活動をする中で、エンジニアリングに興味をもち、テックキャンプに通う
                <br />
                <strong>2017年:</strong>
                福岡の勤怠管理、給与計算を制作するITベンチャーにて、
                <br />
                サーバーサイドエンジニアとして働く
                <br />
                <strong>2018年:</strong>
                別のフィンテック系ベンチャーに転職。同じくサーバーサイドエンジニアとして働く
              </StyledParagraph>
            </Box>
            <Box gridArea="skills">
              <Box justify="center" pad={{ vertical: "5vh" }} direction="row">
                <StyledStar color="yellow" />
                <Heading level="3" textAlign="center" margin="none">
                  SKILL
                </Heading>
              </Box>
              <Box direction="row" justify="between" pad={{ horizontal: "10vw" }}>
                <StyledButton color="light-2" label="Ruby" size="small" />
                <StyledButton color="light-2" label="Javascript" size="small" />
                <StyledButton color="light-2" label="Go" size="small" />
                <StyledButton color="light-2" label="AWS" size="small" />
                <StyledButton color="light-2" label="Terraform" size="small" />
              </Box>
            </Box>
          </Grid>
        </Box>
        </Container>
      }
      {
        (size == 'small' || size == 'medium' ) &&
        <MobileContainer>
          <Box
            align="center"
            justify="center"
            direction="row"
            pad={{ vertical: "7vh" }}
          >
            <Heading color="palevioletred" alignSelf="center">
              ABOUT ME
            </Heading>
          </Box>
          <Box>
            <IconBox>
              <Avatar
                size="xlarge"
                src="https://ca.slack-edge.com/T02D9RVN1-UAZ6SCS8Z-110785fffc90-512"
              />
            </IconBox>
          </Box>
          <div>
            <StyledParagraph margin="none">
              福岡のサーバーサイドエンジニア
              <br />
              <br />
              <strong>20016年</strong>
              <br />
              就職活動をする中で、エンジニアリングに興味をもち、テックキャンプに通う
              <br />
              <strong>2017年</strong>
              <br />
              福岡の勤怠管理、給与計算を制作するITベンチャーにて、
              サーバーサイドエンジニアとして働く
              <br />
              <strong>2018年</strong>
              <br />
              別のフィンテック系ベンチャーに転職。同じくサーバーサイドエンジニアとして働く
            </StyledParagraph>
          </div>
          <Box>
              <Box justify="center" pad={{ vertical: "5vh" }} direction="row">
                <StyledStar color="yellow" />
                <Heading level="3" textAlign="center" margin="none">
                  SKILL
                </Heading>
              </Box>
              <Box direction="row" justify="between" pad={{ horizontal: "10vw" }}>
                <SkillItem>Ruby</SkillItem>
                <SkillItem>Javascript</SkillItem>
                <SkillItem>Go</SkillItem>
                <SkillItem>AWS</SkillItem>
                <SkillItem>Terraform</SkillItem>
              </Box>
          </Box>
        </MobileContainer>
      }
      {/* </Element> */}
    </>
  );
};
