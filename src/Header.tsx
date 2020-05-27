import React, { useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { HeaderText } from "./HeaderText";
import styled from "styled-components";
import { easeCubicOut } from "d3-ease";
import "./index.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  will-change: width, height, left, top;
  position: relative;
`;

export const Header: React.FC = () => {
  const ballProps = useSpring({
    from: { left: "100px", top: "90vh" },
    to: async (next, cancel) => {
      await next({ left: "300px", top: "10vh" });
      await next({ left: "600px", top: "90vh" });
    },
    config: { easing: (t) => easeCubicOut(t), friction: 50 },
  });
  const props = useSpring({
    from: {
      left: "0%",
      top: "0%",
      width: "0%",
      height: "0%",
      background: "lightgreen",
      textIndent: "100%",
      textIindent: "-9999px",
    },
    to: useCallback(async (next) => {
      await next({
        left: "0%",
        top: "0%",
        width: "100%",
        height: "100%",
        background: "lightblue",
      });
      await next({
        width: "50%",
        left: "0%",
        height: "100%",
        top: "0%",
        background: "lightgoldenrodyellow",
      });
      await next({
        top: "0%",
        width: "100%",
        height: "50%",
        background: "lightpink",
      });
      await next({
        width: "50%",
        left: "50%",
        height: "100%",
        background: "lightsalmon",
      });
      await next({
        top: "0%",
        height: "100%",
        left: "0%",
        width: "100%",
        background: "lightblue",
      });
      // 最後にテキストタイトルを表示する
      await next({ textIndent: "0px" });
    }, []),
  });

  return (
    <Container>
      <animated.div className="script-box" style={props}>
        <HeaderText />
        <div className="shape-container">
          <div className="shape a"></div>
        </div>
      </animated.div>
    </Container>
  );
};
