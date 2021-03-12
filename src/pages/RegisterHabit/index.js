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
import { Container, Form, Label, useStyles } from "./Style";
import { useState } from "react";

const RegisterHabit = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [frequency, setFrequency] = useState("");

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
    console.log(data);
  };

  return (
    <div>
      <Container>
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
              <MenuItem value="Hard">Hard</MenuItem>
              <MenuItem value="Very Hard">Very Hard</MenuItem>
            </Select>
          </FormControl>

          <FormControl required className={classes.formControl}>
            <Label>Choose the frequency</Label>
            <RadioGroup
              className={classes.radioGrupDisplay}
              value={frequency}
              onChange={(e) => {
                setFrequency(e.target.value);
              }}
            >
              <FormControlLabel
                value="daily"
                control={<Radio />}
                label="Daily"
                className={classes.optionColorAndFont}
              />
              <FormControlLabel
                value="choose"
                control={<Radio />}
                label="Choose the day of the week"
                className={classes.optionColorAndFont}
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            variant="outlined"
            className={classes.buttonStyle}
          >
            Create habit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterHabit;
