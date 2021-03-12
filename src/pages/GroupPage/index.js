import Groups from "../groups";
import UserGroup from "../../components/userGroup";
import { useSelector } from "react-redux";

const GroupPage = () => {
  const haveGroup = useSelector((state) => state.haveGroup);
  console.log(haveGroup);

  if (haveGroup) {
    return <UserGroup />;
  } else {
    return <Groups />;
  }
};

export default GroupPage;
