import React, { useState } from "react";
import Appbar from "./components/AppBar";
import { ThemeProvider, createTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./components/Layout";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: isDarkTheme ? "#444444" : "#ece4d8",
      },
      background: {
        default: isDarkTheme ? "#f1f3f6" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "Quicksand",
      h6: {
        fontWeight: 400,
      },
      overline: {
        fontSize: 14,
        fontWeight: 600,
      },
      body2: {
        fontSize: 14,
        fontWeight: 400,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar isDark={isDarkTheme} setIsDark={setIsDarkTheme} />
        <Layout isDarkTheme={isDarkTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
