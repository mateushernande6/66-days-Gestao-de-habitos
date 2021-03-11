import logo from "../../images/66_days-removebg-preview.png";
import TextField from "@material-ui/core/TextField";
import { DivImage, DivInput, RegisteTag } from "./style";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useEffect } from "react";

const schema = yup.object().shape({
  username: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

const Login = () => {
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
        localStorage.setItem("token", JSON.stringify(response.data.access));
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <DivImage>
        <img src={logo} />
      </DivImage>
      <form onSubmit={handleSubmit(formSubmit)}>
        <DivInput>
          <div>
            <TextField inputRef={register} name="username" label="User name" />
          </div>
          <div>
            <TextField
              type="password"
              name="password"
              label="Password"
              inputRef={register}
            />
          </div>
          <Button type="submit" className="buttonLogin" variant="contained">
            Login
          </Button>
        </DivInput>
      </form>
      <RegisteTag href="#">Register</RegisteTag>
    </>
  );
};
export default Login;
