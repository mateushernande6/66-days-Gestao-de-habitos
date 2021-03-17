import logo from "../../images/66-days-logo.png";
import { TextField, Button } from "@material-ui/core";
import {
  DivImage,
  DivInput,
  RegisteTag,
  ErrorMessage,
  Container,
  Img,
  H1,
  ContainerTitle,
  H2,
  ContainerLogin,
  Form,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { IsLoggedThunk } from "../../store/modules/isLogged/thunks";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import jwt_decode from "jwt-decode";

const schema = yup.object().shape({
  username: yup.string().required("Required field"),
  password: yup
    .string()
    .min(6, "6 characters minimum")
    .required("Required field"),
});

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [err, setErr] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log("entrou aqui");
    axios
      .post("https://kabit-api.herokuapp.com/sessions/", data)
      .then((response) => {
        localStorage.clear();
        const token = response.data.access;
        const { user_id } = jwt_decode(response.data.access);
        const user = { user_id: user_id };
        console.log(response.data);

        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user_id", JSON.stringify(user));
        reset();
        dispatch(IsLoggedThunk(true));
        history.push("/make-habit");
      })
      .catch((err) => err && setErr(true));
  };

  return (
    <Container>
      <ContainerTitle>
        <H1>Welcome!</H1>
        <H2>Develop new healthy habits in 66 days!</H2>
        <H2>Create an account, register new habits that you want</H2>
        <H2>and control your results.</H2>
      </ContainerTitle>

      <ContainerLogin>
        <Img src={logo} />
        <Form onSubmit={handleSubmit(formSubmit)}>
          <DivInput>
            <div>
              <TextField
                helperText={errors.username?.message}
                inputRef={register}
                name="username"
                label="User name"
                error={!!errors.username}
              />
            </div>
            <div>
              <TextField
                helperText={errors.password?.message}
                type="password"
                name="password"
                label="Password"
                inputRef={register}
                error={!!errors.password}
              />
            </div>
            {err && <ErrorMessage>Incorrect username or password</ErrorMessage>}
            <Button type="submit" className="buttonLogin" variant="contained">
              Login
            </Button>
          </DivInput>
        </Form>
        <RegisteTag onClick={() => history.push("/register")}>
          Register
        </RegisteTag>
      </ContainerLogin>
    </Container>
  );
};
export default Login;
