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

import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    tasks.push(task);
    setTask("");
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
          {console.log(task)}
          {/* {console.log(tasks)} */}
          <div>
            <List>
              {tasks.map((ele, index) => (
                <ListItem key={index}>
                  <ListItemText primary={ele} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
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
