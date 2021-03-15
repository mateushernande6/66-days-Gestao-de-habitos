import Groups from "../groups";
import UserGroup from "../../components/userGroup";
import { useSelector } from "react-redux";
import PersonalGroup from "../personalGroup";

const GroupPage = () => {
  const joinGroup = useSelector((state) => state.haveGroup);
  const haveGroup = JSON.parse(localStorage.getItem("userGroup"));
  console.log(haveGroup);
  console.log(joinGroup);
  if (joinGroup || haveGroup) {
    return <PersonalGroup />;
  } else {
    return <Groups />;
  }
};

export default GroupPage;
