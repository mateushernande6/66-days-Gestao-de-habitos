import axios from "axios";
import logo from "../../images/66-days-logo.png";
import { TextField, Button } from "@material-ui/core";
import {
  DivLogo,
  DivButton,
  ErrorMessage,
  BackLogin,
  Container,
  Img,
  ContainerRegister,
  ContainerTitle,
  H1,
  H2,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const schema = yup.object().shape({
  username: yup.string().required("Required field"),
  email: yup.string().email().required("Required field"),
  password: yup
    .string()
    .min(6, "6 characters minimum")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "the password must have at least one uppercase letter, one lowercase letter and one number"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const [err, setErr] = useState();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandle = (data) => {
    delete data.confirmPassword;
    axios
      .post("https://kabit-api.herokuapp.com/users/", data)
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((err) => setErr(err.response.status));
  };

  return (
    <Container>
      <ContainerTitle>
        <H1>Believe that you can,</H1>
        <H1>so you're already</H1>
        <H1>halfway there.</H1>
        <H2>- Theodore Roosevelt</H2>
      </ContainerTitle>
      <ContainerRegister>
        <Img src={logo} />
        <form onSubmit={handleSubmit(submitHandle)}>
          <div>
            <TextField
              helperText={errors.username?.message}
              inputRef={register}
              name="username"
              label="User name"
            />
          </div>
          <div>
            <TextField
              helperText={errors.email?.message}
              inputRef={register}
              name="email"
              label="E-mail"
            />
          </div>
          <div>
            <TextField
              helperText={errors.password?.message}
              inputRef={register}
              name="password"
              label="Password"
            />
          </div>
          <div>
            <TextField
              helperText={errors.confirmPassword?.message}
              inputRef={register}
              name="confirmPassword"
              label="Confirm password "
            />
          </div>
          <DivButton>
            {err === 400 && (
              <ErrorMessage>username already exists</ErrorMessage>
            )}
            <Button type="submit" className="registerBtn" variant="contained">
              Sign up
            </Button>
          </DivButton>
        </form>
        <BackLogin onClick={() => history.push("/")}>Login</BackLogin>
      </ContainerRegister>
    </Container>
  );
};
export default Register;
