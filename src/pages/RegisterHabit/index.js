import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form, Input, Label, useStyles } from "./Style";

const schema = yup.object().shape({
  title: yup.string().required("Required field"),
});

const RegisterHabit = () => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Container>
        <Form>
          <Label>What habit do you want to start?</Label>
          <Input type="text" name="title" ref={register} />
          <FormControl variant="outlined" className={classes.formControl}>
            <Label>Define the category</Label>
            <Select
              id="demo-simple-select-outlined"
              className={classes.selectWidth}
              inputRef={register}
              name="category"
            >
              <MenuItem value="health">health</MenuItem>
              <MenuItem value="food">food</MenuItem>
              <MenuItem value="study">study</MenuItem>
              <MenuItem value="career">career</MenuItem>
            </Select>
            <Label>Define the difficulty</Label>
            <Select
              id="demo-simple-select-outlined"
              className={classes.selectWidth}
              inputRef={register}
              name="difficulty"
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
              <MenuItem value="Very Hard">Very Hard</MenuItem>
            </Select>
            <Label>Choose the frequency</Label>
            <RadioGroup
              className={classes.radioGrupDisplay}
              inputRef={register}
              name="frequency"
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
            variant="outlined"
            className={classes.buttonStyle}
            type="submit"
          >
            Create habit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterHabit;
