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
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
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
import Subtask from "../Subtask/Subtask";
import "./Home.css";
import Box from "@material-ui/core/Box";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// import { MuiAlert } from "@material-ui/lab";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    width: theme.spacing(71),
    marginTop: 20,

    background: "#EBFF57",
    margin: theme.spacing(2),
  },
  input: {
    width: 312,
    marginTop: 20,
    marginLeft: 30,
  },

  add: {
    marginTop: 30,
    marginLeft: 10,
    background: green[400],
    "&:hover": {
      backgroundColor: green[500],
    },
  },

  check: {
    marginTop: 30,
    marginLeft: 10,
  },
  progressIndicator: {
    marginTop: 30,
    // marginLeft: 10,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = React.useState(false);
  const [openAddSnackbar, setOpenAddSnackbar] = React.useState(false);
  const [openDelSnackbar, setOpenDelSnackbar] = React.useState(false);
  const [update, setupdate] = React.useState(false);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    const dict = { taskValue: task, checkValue: checked };
    tasks.push(dict);
    setOpenDelSnackbar(false);
    setOpenAddSnackbar(true);
    setTask("");
    setupdate(!update);
  };

  const handleDel = (id) => {
    // let updatedTasks = tasks.splice(id, 1);
    let updatedTasks = [...tasks];
    updatedTasks.splice(id, 1);
    setTasks(updatedTasks);
    setOpenAddSnackbar(false);
    setOpenDelSnackbar(true);
    console.log(id);
  };
  const handleCloseAddSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAddSnackbar(false);
  };

  const handleCloseDelSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenDelSnackbar(false);
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubDel = (e) => {
    // subTasks.splice(e.target.value, 1);
    console.log(e.target.value);
  };

  return (
    <div className="home">
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Paper className={classes.paper} elevation={5}>
            <TextField
              id="standard-basic"
              label="Enter the Task"
              size="small"
              className={classes.input}
              onChange={handleTask}
              value={task}
              autoComplete="off"
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.add}
              onClick={handleAdd}
            >
              ADD
            </Button>

            <FormControlLabel
              className={classes.check}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheck}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="SubTasks"
            />

            <div>
              <List>
                {tasks.map((ele, index) => (
                  <ListItem key={index}>
                    <Subtask
                      element={ele.taskValue}
                      needSubtask={ele.checkValue}
                    />
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDel(index)}
                    >
                      <DeleteIcon fontSize="large" />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </Paper>
          <Snackbar
            open={openAddSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseAddSnackbar}
          >
            <Alert onClose={handleCloseAddSnackbar} severity="success">
              A New Task is Added!
            </Alert>
          </Snackbar>

          <Snackbar
            open={openDelSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseDelSnackbar}
          >
            <Alert onClose={handleCloseDelSnackbar} severity="error">
              A Task is Deleted!
            </Alert>
          </Snackbar>
        </Container>
      </div>
    </div>
  );
};

export default Home;
