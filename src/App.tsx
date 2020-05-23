import React, { useState } from "react";
import { Grommet, Box } from "grommet";
// import { MyHeader } from "./Header";
import { About } from "./About";
import { Carrer } from "./Carrer";
import { Header as MyHeader } from "./Test";
import { useTrail, animated, useTransition } from "react-spring";

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
      {/* <MyHeader /> */}
      <About />
      <Carrer />
    </Grommet>
  );
}

export default App;
