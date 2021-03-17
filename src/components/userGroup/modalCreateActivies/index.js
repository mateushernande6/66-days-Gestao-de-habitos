import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import StandardModal from "../../modal";
import { Button, Divider, makeStyles } from "@material-ui/core";
import { DifficultyDiv, InputDiv, ModalDiv, ErrorMessage } from "./styles";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
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
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const CreateActivies = () => {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());

  const [userGroup, setGroup] = useState(() => {
    const group = localStorage.getItem("userGroup") || "";
    return JSON.parse(group);
  });
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  const schema = yup.object().shape({
    title: yup.string().max(18).required("Max 18 characters"),
  });
  const [save, setSave] = useState([{}]);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const handleData = (data) => {
    console.log(data);
    const send = {};
    send.title = data.title;
    send.realization_time = value.toISOString();
    send.group = userGroup;
    console.log(send);
    console.log(save);
    axios
      .post(`https://kabit-api.herokuapp.com/activities/`, send, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then()
      .catch((e) => console.log(e.response));
  };

  useEffect(() => {});
  return (
    <StandardModal
      buttonColor="default"
      buttonTxt="Create Activies"
      buttonHeight="30px"
      buttonMargin="6px"
    >
      <ModalDiv>
        <form onSubmit={handleSubmit(handleData)}>
          <section>
            <h1>Create Activies</h1>

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
              <h2>Define a Realization Time</h2>
            </DifficultyDiv>
            <div>
              <DateTimePicker onChange={onChange} value={value} />
            </div>
            <Button
              type="submit"
              className={classes.root}
              color="primary"
              variant="contained"
            >
              Create Activies
            </Button>
          </section>
        </form>
        <div>
          Title:{save.title}
          Difficulty: {save.difficulty}
          Time: {value.toISOString()}
        </div>
      </ModalDiv>
    </StandardModal>
  );
};

export default CreateActivies;
