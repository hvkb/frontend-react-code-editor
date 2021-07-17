import React, { useState, useEffect } from "react";
import useStyles from "../styles";
import FileExplorer from "./FileExplorer";
import CodeEditor from "./CodeEditor";
import LiveView from "./LiveView.js";
import { Grow, Grid } from "@material-ui/core";

export default function Layout({ isDarkTheme }) {
  const [title, setTitle] = useState("html");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const classes = useStyles();

  useEffect(() => {
    setSrcDoc(`
      <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
      </html>
    `);
  }, [html, css, js]);

  return (
    <div>
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          className={classes.grid}
          spacing={0}
        >
          <Grid item xs={12} sm={2} lg={3}>
            <FileExplorer setTitle={setTitle} />
          </Grid>
          <Grid item xs={12} sm={10} lg={9}>
            {title === "html" ? (
              <CodeEditor
                heading={title}
                value={html}
                onChange={setHtml}
                mode="xml"
                isDark={isDarkTheme}
              />
            ) : title === "css" ? (
              <CodeEditor
                heading={title}
                value={css}
                onChange={setCss}
                mode="css"
                isDark={isDarkTheme}
              />
            ) : (
              <CodeEditor
                heading={title}
                value={js}
                onChange={setJs}
                mode="js"
                isDark={isDarkTheme}
              />
            )}
          </Grid>
        </Grid>
      </Grow>
      <LiveView srcDoc={srcDoc} />
    </div>
  );
}
