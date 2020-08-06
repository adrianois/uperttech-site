import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";

export default function App(): JSX.Element {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}
