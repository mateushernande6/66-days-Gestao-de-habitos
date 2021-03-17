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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Label, useStyles } from "./Style";
import {
  Container,
  ContainerCreateCard,
  CircleBottom,
  CircleTop,
} from "../../Assets/Layout-pattern-pages/Style";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router-dom";

// aqui
import { useDispatch } from "react-redux";
import { getHabitsThunk } from "../../store/modules/getHabits/thunk";

const RegisterHabit = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [id, setId] = useState(0);
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });
  const history = useHistory();

  // aqui
  const dispatch = useDispatch();

  useEffect(() => {
    const { user_id } = jwt_decode(token);
    setId(user_id);
  }, []);

  const schema = yup.object().shape({
    title: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    data.category = category;
    data.difficulty = difficulty;
    data.frequency = frequency;
    data.achieved = false;
    data.how_much_achieved = 0;
    data.user = id;
    console.log(data);

    axios
      .post("https://kabit-api.herokuapp.com/habits/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(history.push("/home"))
      .catch((e) => console.log(e.response));

    // Natan, eu precisei colocar um dispatch aqui, porque eu não conseguia receber imediatamente o resultado da inclusão no painel de hábitos.
    dispatch(getHabitsThunk(token));
  };

  return (
    <Container>
      <CircleTop />
      <CircleBottom />
      <ContainerCreateCard>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Label>What habit do you want to start?</Label>
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
            <Label>Define the category</Label>
            <Select
              id="demo-simple-select-outlined"
              className={classes.selectWidth}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="health">health</MenuItem>
              <MenuItem value="food">food</MenuItem>
              <MenuItem value="study">study</MenuItem>
              <MenuItem value="career">career</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <Label>Define the difficulty</Label>
            <Select
              id="demo-simple-select-outlined"
              className={classes.selectWidth}
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
              <MenuItem value="very Hard">Very Hard</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="outlined"
            className={classes.buttonStyle}
          >
            Create habit
          </Button>
        </Form>
      </ContainerCreateCard>
    </Container>
  );
};

export default RegisterHabit;
