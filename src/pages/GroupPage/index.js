import Groups from "../groups";
import UserGroup from "../../components/userGroup";
import { useSelector } from "react-redux";
import PersonalGroup from "../personalGroup";

const GroupPage = () => {
  const haveGroup = useSelector((state) => state.haveGroup);
  console.log(haveGroup);

  //if (haveGroup) {
  return <PersonalGroup />;
  //} else {
  return <Groups />;
  //}
};

export default GroupPage;
