import logo from "../../images/66_days-removebg-preview.png";
import TextField from "@material-ui/core/TextField";
import { DivImage, DivInput, RegisteTag } from "./style";
import Button from "@material-ui/core/Button";

const Login = () => {
  return (
    <>
      <DivImage>
        <img src={logo} />
      </DivImage>
      <form>
        <DivInput>
          <div>
            <TextField id="standard-basic" label="User name" />
          </div>
          <div>
            <TextField id="standard-basic" label="Password" />
          </div>
          <Button className="buttonLogin" variant="contained">
            Login
          </Button>
        </DivInput>
      </form>
      <RegisteTag href="#">Register</RegisteTag>
    </>
  );
};
export default Login;
