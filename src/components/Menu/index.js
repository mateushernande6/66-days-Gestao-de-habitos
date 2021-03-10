import { Link } from "react-router-dom";
import Logo from "../../images/66 days-logo.png";
import { AiOutlineHome, AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { GrGroup, GrLogout } from "react-icons/gr";
import { BsClipboardData } from "react-icons/bs";

const Menu = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="66 days" />
      </div>

      <div>
        <Link to="home">
          <AiOutlineHome />
        </Link>

        <Link to="/group">
          <GrGroup />
        </Link>

        <Link to="/dashboard">
          <BsClipboardData />
        </Link>
      </div>

      <div>
        <Link to="/password-reset">
          <AiOutlineSetting />
        </Link>

        <GrLogout />
      </div>
    </div>
  );
};

export default Menu;
