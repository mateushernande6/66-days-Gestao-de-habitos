import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import StandardModal from "../../modal";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { Form, Label, ContentModal } from "./styles";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import { showToast } from "../../toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const CreateActivies = () => {
  const toastify = () =>
    showToast({ type: "create", message: "Activity Created" });

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
      .then(toastify())
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
      <ContentModal>
        <Form className={classes.root} onSubmit={handleSubmit(handleData)}>
          <h3>Create a Activity</h3>
          <h4>Activity: </h4>
          <Label>New activity title</Label>
          <TextField
            className={classes.spaceBottom}
            id="outlined-basic"
            variant="outlined"
            name="title"
            inputRef={register}
            errors={!!errors.title}
            helperText={errors.title?.message}
          />
          <Label>Define a Realization Time</Label>
          <DateTimePicker onChange={onChange} value={value} />
          <Button type="submit" variant="contained">
            Create Activity
          </Button>
        </Form>
      </ContentModal>
    </StandardModal>
  );
};

export default CreateActivies;
