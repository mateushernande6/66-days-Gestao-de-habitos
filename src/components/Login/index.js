import logo from "../../images/66_days-removebg-preview.png";
import TextField from "@material-ui/core/TextField";
import { DivImage, DivInput, RegisteTag, ErrorMessage } from "./style";
import Button from "@material-ui/core/Button";
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
        console.log(response.data.access);
        const { user_id } = jwt_decode(response.data.access);
        const user = { user_id: user_id };
        console.log(user);
        localStorage.setItem("token", JSON.stringify(user));
        reset();
        dispatch(IsLoggedThunk(true));
        history.push("/home");
      })
      .catch((err) => err && setErr(true));
  };

  return (
    <>
      <DivImage>
        <img src={logo} />
      </DivImage>
      <form onSubmit={handleSubmit(formSubmit)}>
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
      </form>
      <RegisteTag onClick={() => history.push("/register")}>
        Register
      </RegisteTag>
    </>
  );
};
export default Login;
