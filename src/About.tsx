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

const MyIcon: React.FC = () => {
  const style = {
    margin: "0 auto"
  };

  return (
    <div style={style}>
      <Avatar
        size="xlarge"
        src="https://ca.slack-edge.com/T02D9RVN1-UAZ6SCS8Z-110785fffc90-512"
      />
    </div>
  )
};

type TAbountTitle = {
  isVisible?: boolean
}

const AboutTitle: React.FC<TAbountTitle> = ({isVisible = true}) => {
  return (
    <div style={{height: "28vh"}}>
      {
        isVisible &&  (
          <Box
            align="center"
            justify="center"
            direction="row"
            pad={{ vertical: "7vh" }}
            animation={isVisible ? { type: "slideUp", size: "large" } : undefined}
          >
            <Heading color="palevioletred" alignSelf="center">
              ABOUT ME
            </Heading>
          </Box>
        )
      }
    </div>
  );
}

type SizeType = {
  size: string
}

const ParagraphContainer: React.FC<SizeType> = ({size}) => {
  return (
    <>
      {
        (size != 'small' && size != 'medium') ? (
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
        ) : (
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
        )
      }
    </>
  );
}

const Skills: React.FC<SizeType> = ({size}) => {
  return (
    <>
      <Box justify="center" pad={{ vertical: "5vh" }} direction="row">
      <StyledStar color="yellow" />
      <Heading level="3" textAlign="center" margin="none">
        SKILL
      </Heading>
      </Box>
      <Box direction="row" justify="between" pad={{ horizontal: "10vw" }}>
        {
          (size != 'small' && size != 'medium') ? (
            <>
              <StyledButton color="light-2" label="Ruby" size="small" />
              <StyledButton color="light-2" label="Javascript" size="small" />
              <StyledButton color="light-2" label="Go" size="small" />
              <StyledButton color="light-2" label="AWS" size="small" />
              <StyledButton color="light-2" label="Terraform" size="small" />
            </>
          ) : (
            <>
              <SkillItem>Ruby</SkillItem>
              <SkillItem>Javascript</SkillItem>
              <SkillItem>Go</SkillItem>
              <SkillItem>AWS</SkillItem>
              <SkillItem>Terraform</SkillItem>
            </>
          )
        }
      </Box>
    </>
  )
}

export const About: React.FC = () => {
  const size = useContext(ResponsiveContext);

  return (
    <>
      { 
        (size != 'small' && size != 'medium' ) ? (
          <VisibilitySensor partialVisibility={true} offset={{top: 100, bottom: 200}} >
            {({isVisible}) => 
              <Container>
              <AboutTitle isVisible={isVisible}/>
                <>
                  { isVisible && (
                    <Box pad={{ horizontal: "7vw" }} animation={{ type: "slideUp", size: "large" }} >
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
                          <MyIcon />
                        </Box>
                        <Box gridArea="paragraph">
                          <ParagraphContainer size={size} />
                        </Box>
                        <Box gridArea="skills">
                          <Skills size={size} />
                        </Box>
                      </Grid>
                    </Box>
                  )}
                </>
              </Container>
            }
          </VisibilitySensor>
        ) : (
          <MobileContainer>
            <AboutTitle />
            <VisibilitySensor>
              {
                ({isVisible}) =>
                <>
                  {
                    true && (
                      <>
                        <Box>
                          <MyIcon />
                        </Box>
                        <div>
                          <ParagraphContainer size={size}/>
                        </div>
                        <Box>
                          <Skills size={size} />
                        </Box>
                      </>
                    )
                  }
                </>
              }
            </VisibilitySensor>
          </MobileContainer>
        )
      }
    </>
  );
};
