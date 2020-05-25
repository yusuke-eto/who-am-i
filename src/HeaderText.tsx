import React, { useState } from "react";
import { animated, useTrail } from "react-spring";
import styled from "styled-components";
import "./index.css";

const items = ["Hello", "This", "is", "yusuke"];
const config = { mass: 5, tension: 2000, friction: 200 };

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderText: React.FC = () => {
  const [toggle, set] = useState<Boolean>(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 100,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 100 },
  });

  return (
    <Container onClick={() => set(!toggle)}>
      <div>
        {trail.map(({ x, height, ...rest }: any, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </Container>
  );
};
