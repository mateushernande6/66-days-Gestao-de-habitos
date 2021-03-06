import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import StandardModal from "../../modall";
import StandardButton from "../../button";
import { AiFillEdit } from "react-icons/ai";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import { ContentModal } from "./styles";
import api from "../../../services/index";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Label } from "./styles";
import { showToast } from "../../toastify";
import { useDispatch } from "react-redux";
import { getGroupThunk } from "../../../store/modules/getGroups/thunk";

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

const schema = yup.object().shape({
  title: yup.string().required("Required field"),
});

const EditGoal = ({ value, token, reloadFunction }) => {
  const toastify = () => showToast({ type: "send", message: "Goal edited" });
  const dispatch = useDispatch();
  const [userGroup, setGroup] = useState(() => {
    const group = localStorage.getItem("userGroup") || "";
    return JSON.parse(group);
  });
  const classes = useStyles();
  const [difficulty, setDifficulty] = useState("");
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log("handleForm");
    console.log(difficulty);
    data.difficulty = difficulty;
    console.log(data);

    api
      .patch(`/goals/${value.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toastify();
        console.log(`${value.id} editado`);
      });

    reloadFunction();
    dispatch(getGroupThunk(userGroup));
  };

  return (
    <>
      <StandardModal
        buttonColor="default"
        buttonTxt={<AiFillEdit />}
        buttonHeight="30px"
        buttonMargin="6px"
      >
        <ContentModal>
          <Form className={classes.root} onSubmit={handleSubmit(handleForm)}>
            <h3>Edit goal</h3>
            <h4>{`Goal: ${value.title}`}</h4>
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
              <Label>New difficulty</Label>
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

            <Button
              type="submit"
              variant="contained"
              // className={classes.button}
            >
              Submit Edit
            </Button>
          </Form>
        </ContentModal>
      </StandardModal>
    </>
  );
};

export default EditGoal;
