import { Link } from "react-router-dom";
import Logo from "../../images/66-days-logo.png";
import { AiOutlineHome, AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { BsClipboardData, BsPower } from "react-icons/bs";
import { StyledMenu } from "./styles";

const Menu = () => {
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
        <AiOutlineBell />

        <Link
          to="/password-reset"
          style={{ display: "flex", justifyContent: "center", color: "black" }}
        >
          <AiOutlineSetting />
        </Link>

        <BsPower />
      </div>
    </StyledMenu>
  );
};

export default Menu;
