import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { HaveGroupThunk } from "../../../../store/modules/haveGroup/thunks";

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
  const [save, setSave] = useState([{}]);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const handleData = (data) => {
    console.log(data);
    const send = {};
    send.name = data.name;
    send.description = data.description;
    send.category = category;
    data.category = category;
    setSave(data);
    console.log(save);
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
        Name:{save.name}
        Description:{save.description}
        Category: {save.category}
      </div>
    </ModalDiv>
  );
};

export default CreateGroup;
