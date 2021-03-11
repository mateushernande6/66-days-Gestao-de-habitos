import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { CategoryDiv, InputDiv, ModalDiv, ErrorMessage } from "./styles";
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
    margin: "0 auto",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreateGroup = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };
  const schema = yup.object().shape({
    name: yup.string().max(18).required("Max 18 characters"),

    description: yup.string().max(60).required("Max 60 characters"),
  });
  const [guardar, setGuardar] = useState([{}]);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const handleData = (data) => {
    console.log(data);
    data.category = category;
    setGuardar(data);
    console.log(guardar);
  };

  return (
    <ModalDiv>
      <form onSubmit={handleSubmit(handleData)}>
        <section>
          <h1>Group Create</h1>

          <CategoryDiv>
            <h2>Define a category</h2>

            <FormControl required className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">
                Category
              </InputLabel>

              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={category}
                onChange={handleChange}
                className={classes.selectEmpty}
              >
                <MenuItem value={"Food"}>Food</MenuItem>
                <MenuItem value={"Study"}>Study</MenuItem>
                <MenuItem value={"Health"}>Health</MenuItem>
              </Select>
            </FormControl>
          </CategoryDiv>
          <InputDiv>
            <div>
              <div>Name:</div>
              <input
                name="name"
                placeholder="Max 18 characters"
                ref={register}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </div>

            <div>
              <div>Description:</div>
              <input
                name="description"
                placeholder="Max 60 characters"
                ref={register}
              />
              {errors.description && (
                <ErrorMessage>{errors.description.message}</ErrorMessage>
              )}
            </div>
          </InputDiv>

          <Button
            type="submit"
            className={classes.root}
            color="primary"
            variant="contained"
          >
            Create a Group
          </Button>
        </section>
      </form>
      <div>
        Name:{guardar.name}
        Description:{guardar.description}
        Category: {guardar.category}
      </div>
    </ModalDiv>
  );
};

export default CreateGroup;
