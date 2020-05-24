import React from "react";
import { Grommet } from "grommet";
import { About } from "./About";
import { Header as MyHeader } from "./Header";
import { Feature } from "./Feature";
import { MyFooter } from "./MyFooter";

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
      <About />
      <Feature />
      <MyFooter />
    </Grommet>
  );
}

export default App;
