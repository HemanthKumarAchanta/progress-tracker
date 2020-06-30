import React, { useState } from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: theme.spacing(50),
      height: theme.spacing(80),
      background: "#EBFF57",
    },
  },
  textbox: {},
}));

const Home = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const onSubmitHandler = () => {
    list.push(task);
    setTask("");
  };

  const taskChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const classes = useStyles();

  return (
    <div className="container">
      <div className="home">
        <div className={classes.root}>
          <Paper elevation={3} className="paper">
            <div className="input">
              <TextField
                label="Enter the Task"
                id="filled-size-small"
                variant="outlined"
                size="small"
                onChange={taskChangeHandler}
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
                onClick={onSubmitHandler}
              ></Button>
            </div>
            <div className="list">
              {list.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Home;
