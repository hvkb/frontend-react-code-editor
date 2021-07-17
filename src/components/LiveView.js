import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from '../styles';

export default function LiveView({ srcDoc }) {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="overline">live view</Typography>
      </Box>
      <iframe
        className={classes.frame}
        srcDoc={srcDoc}
        width="100%"
        height="340"
        title="Live-view"
        frameBorder="0"
      />
    </div>
  );
}
