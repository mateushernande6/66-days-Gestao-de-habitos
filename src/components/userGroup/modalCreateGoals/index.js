import StandardModal from "../../modall";
import ContentCreateGoal from "./modalContent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import StandardButton from "../../button";
import { AiFillEdit } from "react-icons/ai";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import { ContentModal } from "./styles";
import api from "../../../services/index";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Label } from "./styles";
import { showToast } from "../../toastify";

import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const CreateGoals = () => {
  const classes = useStyles();
  const [difficulty, setDifficulty] = useState("");
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });
  const [userGroup, setGroup] = useState(() => {
    const group = localStorage.getItem("userGroup") || "";
    return JSON.parse(group);
  });
  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const toastify = () => showToast({ type: "create", message: "Goal Created" });

  const handleForm = (data) => {
    console.log("handleForm");
    console.log(difficulty);
    data.difficulty = difficulty;
    data.how_much_achieved = 0;
    data.group = userGroup;
    console.log(data);
    api
      .post(`/goals/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(toastify())
      .catch((e) => console.log(e.response));
  };

  return (
    <StandardModal
      buttonColor="default"
      buttonTxt="Create Goals"
      buttonHeight="30px"
      buttonMargin="6px"
    >
      <ContentModal>
        <Form className={classes.root} onSubmit={handleSubmit(handleForm)}>
          <h3>Create a Goal</h3>
          <h4>Goal: </h4>
          <Label>New goal's title</Label>
          <TextField
            className={classes.spaceBottom}
            id="outlined-basic"
            variant="outlined"
            name="title"
            inputRef={register}
            errors={!!errors.title}
            helperText={errors.title?.message}
          />

          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <Label>Goal difficulty</Label>
            <Select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              id="demo-simple-select-outlined"
              className={classes.selectWidth}
              name="difficulty"
              inputRef={register}
              error={!!errors.difficulty}
              helperText={errors.difficulty?.message}
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
              <MenuItem value="very hard">Very Hard</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained">
            Create Goal
          </Button>
        </Form>
      </ContentModal>
    </StandardModal>
  );
};

export default CreateGoals;
