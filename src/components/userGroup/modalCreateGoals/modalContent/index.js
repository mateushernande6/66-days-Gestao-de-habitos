import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import {
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { DifficultyDiv, InputDiv, ModalDiv, ErrorMessage } from "./styles";

import axios from "axios";
import { ToastAnimated, showToast } from "../../../toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #8aeb91 30%, #86e78e 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "linear-gradient(45deg, #8aeb91 30%, #86e78e 90%)",
    color: "white",
    height: 26,
    padding: "0 30px",
    margin: "4px",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const ContentCreateGoal = () => {
  const classes = useStyles();
  const [difficulty, setDifficulty] = useState("");
  const [userGroup, setGroup] = useState(() => {
    const group = localStorage.getItem("userGroup") || "";
    return JSON.parse(group);
  });
  const toastify = () => showToast({ type: "create", message: "Goal Created" });

  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  const handleChange = (event) => {
    setDifficulty(event.target.value);
    console.log(difficulty);
  };
  const schema = yup.object().shape({
    title: yup.string().max(18).required("Max 18 characters"),
  });
  const [save, setSave] = useState([{}]);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const handleData = (data) => {
    console.log(data);
    data.difficulty = difficulty;
    data.how_much_achieved = 0;
    data.group = userGroup;
    setSave(data);
    console.log(save);
    axios
      .post(`https://kabit-api.herokuapp.com/goals/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then()
      .catch((e) => console.log(e.response));
  };

  useEffect(() => {});
  return (
    <ModalDiv>
      <ToastAnimated />
      <form onSubmit={handleSubmit(handleData)}>
        <section>
          <h1>Create Goal</h1>

          <InputDiv>
            <div>
              <div>Title:</div>
              <input
                name="title"
                type="text"
                placeholder="Max 18 characters"
                ref={register}
              />
              {errors.title && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
              )}
            </div>
          </InputDiv>
          <DifficultyDiv>
            <h2>Define a Difficulty</h2>

            <FormControl required className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">
                Difficulty
              </InputLabel>

              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={difficulty}
                onChange={handleChange}
                className={classes.selectEmpty}
              >
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
              </Select>
            </FormControl>
          </DifficultyDiv>
          <Button
            type="submit"
            className={classes.root}
            color="primary"
            variant="contained"
            onClick={() => {
              toastify();
            }}
          >
            Create a Goal
          </Button>
        </section>
      </form>
      <div>
        Title:{save.title}
        Difficulty: {save.difficulty}
      </div>
    </ModalDiv>
  );
};

export default ContentCreateGoal;
