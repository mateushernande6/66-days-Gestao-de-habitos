import { Link } from "react-router-dom";
import Logo from "../../images/66-days-logo.png";
import { AiOutlineHome, AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { BsClipboardData, BsPower } from "react-icons/bs";
import { StyledMenu, BsPowerStyled } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IsLoggedThunk } from "../../store/modules/isLogged/thunks";

const Menu = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(IsLoggedThunk(false));
    history.push("/");
  };

  return (
    <StyledMenu>
      <Link to="home">
        <img src={Logo} alt="66 days" />
      </Link>

      <div>
        <Link to="home" style={{ color: "black" }}>
          <AiOutlineHome />
        </Link>

        <Link to="/group">
          <GrGroup />
        </Link>

        <Link to="/dashboard" style={{ color: "black" }}>
          <BsClipboardData />
        </Link>
      </div>
      <div>
        <BsPowerStyled onClick={() => logout()} />
      </div>
    </StyledMenu>
  );
};

export default Menu;
