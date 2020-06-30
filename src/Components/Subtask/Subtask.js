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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  input2: {
    width: 300,
    marginLeft: 30,
  },

  add2: {
    radius: 50,
  },
}));

const Subtask = (props) => {
  const classes = useStyles();
  const [subTask, setSubTask] = useState("");
  const [subTasks, setSubTasks] = useState([]);

  const ele = props.element;
  const handleSubTask = (e) => {
    setSubTask(e.target.value);
  };

  const handleSubAdd = () => {
    subTasks.push(subTask);
    setSubTask("");
  };

  const handleSubDel = (e) => {
    // subTasks.splice(e.target.value, 1);
    console.log(e.target.value);
  };

  return (
    <>
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

        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleSubAdd}
        >
          <AddCircleSharpIcon fontSize="large" />
        </IconButton>

        <ExpansionPanelDetails>
          <Typography color="textSecondary">
            {subTasks.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

export default Subtask;
