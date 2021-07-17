import React from "react";
import {List, Typography, Box} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import useStyles from '../styles';

export default function FileExplorer({setTitle}) {
  const classes = useStyles();

  return (
    <div>
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
       <Typography variant="overline">Files</Typography>
      </Box>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          onClick={() => {
            setTitle("html");
          }}
        >
          <Typography variant="body2">HTML</Typography>
        </ListItem>

        <ListItem
          button
          onClick={() => {
            setTitle("css");
          }}
        >
         <Typography variant="body2">CSS</Typography>
        </ListItem>

        <ListItem
          button
          onClick={() => {
            setTitle("js");
          }}
        >
         <Typography variant="body2">JavaScript</Typography>
        </ListItem>
      </List>
    </div>
  );
}
