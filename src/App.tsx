import React, { FC } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import { CssBaseline } from "@material-ui/core";

const App: FC = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Home />
      <GlobalStyle />
    </StylesProvider>
  );
};

export default App;
