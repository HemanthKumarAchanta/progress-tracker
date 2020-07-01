import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Subtask2 = (props) => {
  const [checked, setChecked] = React.useState(false);
  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleCheck}
            inputProps={{ "aria-label": "primary checkbox" }}
            size="small"
          />
        }
        label={props.subElement}
      />
    </>
  );
};

export default Subtask2;
