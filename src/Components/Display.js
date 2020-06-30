import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Typography from "@material-ui/core/Typography";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Checkbox from "@material-ui/core/Checkbox";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";

import "./Display.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    width: theme.spacing(55),
    // height: theme.spacing(75),
    marginTop: 20,

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
  input2: {
    width: 300,
    marginLeft: 30,
  },
  add: {
    marginTop: 30,
    marginLeft: 10,
    background: green[400],
    "&:hover": {
      backgroundColor: green[500],
    },
    subAdd: {
      marginTop: 30,
      marginLeft: 10,
    },
  },
  add2: {
    radius: 50,
  },
}));

const Display = () => {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [subTask, setSubTask] = useState("");
  const [subTasks, setSubTasks] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    tasks.push(task);
    setTask("");
  };
  const handleSubTask = (e) => {
    setSubTask(e.target.value);
  };

  const handleSubAdd = () => {
    subTasks.push(subTask);
    setSubTask("");
  };

  return (
    <div className="display">
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
          <TextField
            id="standard-basic"
            label="Enter the Task"
            size="small"
            className={classes.input}
            onChange={handleTask}
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.add}
            onClick={handleAdd}
          >
            ADD
          </Button>

          <div>
            <List>
              {tasks.map((ele, index) => (
                <ListItem key={index}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-label="Expand"
                      aria-controls="additional-actions1-content"
                      id="additional-actions1-header"
                    >
                      <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label={ele}
                      />
                    </ExpansionPanelSummary>
                    <TextField
                      id="standard-basic"
                      label="Enter the Sub Task"
                      size="small"
                      className={classes.input2}
                      onChange={handleSubTask}
                    />

                    <IconButton color="secondary" aria-label="add an alarm">
                      <AddCircleSharpIcon
                        fontSize="large"
                        onClick={handleSubAdd}
                      />
                    </IconButton>

                    <ExpansionPanelDetails>
                      <Typography color="textSecondary">
                        {subTasks.map((ele, index) => (
                          <li key={index}>{ele}</li>
                        ))}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </ListItem>
              ))}
            </List>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Display;
