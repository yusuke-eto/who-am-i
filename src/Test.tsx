import React, { useState, useCallback } from "react";
import { useSpring, animated, useTrail } from "react-spring";
import { HeaderText } from "./HeaderText";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  will-change: width, height, left, top;
  position: relative;
`;

const items = ["Hello", "This", "is", "yusuke"];
const config = { mass: 5, tension: 2000, friction: 200 };

export const Header = () => {
  const { left, top, width, height, background, textIndent } = useSpring({
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
      await next({ height: "50%", top: "50%", background: "lightgreen" });
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
      <animated.div
        className="script-box"
        style={{ left, top, width, height, background, textIndent }}
      >
        <HeaderText />
      </animated.div>
    </Container>
  );
};
