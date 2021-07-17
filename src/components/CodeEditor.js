import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ambiance.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { Box, Typography } from "@material-ui/core";

export default function CodeEditor({ mode, heading, value, onChange, isDark }) {

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="overline">{heading}</Typography>
      </Box>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: mode,
          theme: isDark? "ambiance": "duotone-light",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
