import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import "./Display.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    width: theme.spacing(55),
    height: theme.spacing(75),
    background: "#EBFF57",
    margin: theme.spacing(2),
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  input: {
    width: 300,
    marginTop: 20,
    marginLeft: 30,
  },
  add: { marginTop: 30, marginLeft: 10 },
}));

const Display = () => {
  const classes = useStyles();
  return (
    <div className="display">
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
          <TextField
            id="standard-basic"
            label="Enter the Task"
            size="small"
            className={classes.input}
          />
          <Button variant="contained" color="secondary" className={classes.add}>
            ADD
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Display;
