import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import StandardModal from "../../modall";
import { AiFillEdit } from "react-icons/ai";
import api from "../../../services/index";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Label, ContentModal } from "./styles";
import { Button, TextField } from "@material-ui/core";
import { showToast } from "../../toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGroupThunk } from "../../../store/modules/getGroups/thunk";

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

const EditActivity = ({ value, token, reloadFunction }) => {
  const toastify = () =>
    showToast({ type: "send", message: "Activity edited" });

  const dispatch = useDispatch();
  const [userGroup, setGroup] = useState(() => {
    const group = localStorage.getItem("userGroup") || "";
    return JSON.parse(group);
  });

  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log("handleForm");
    console.log(data);

    api
      .patch(`/activities/${value.id}/`, data, {
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
            <h3>Edit activity</h3>
            <h4>{`Activity: ${value.title}`}</h4>
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

            <Button type="submit" variant="contained">
              Submit Edit
            </Button>
          </Form>
        </ContentModal>
      </StandardModal>
    </>
  );
};

export default EditActivity;
