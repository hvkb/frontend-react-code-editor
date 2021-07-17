import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import FlareIcon from "@material-ui/icons/Flare";
import useStyles from "../styles";
export default function Appbar({ isDark, setIsDark }) {
  const classes = useStyles();
  const icon = isDark ? <FlareIcon />: <Brightness3Icon />;
  function handleChange() {
    setIsDark(!isDark);
  }
  return (
    <AppBar position="static" color="primary">
      <Toolbar display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h6" className={classes.appbarTitle}>
          not codepen
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={handleChange}
        >
          {icon}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
