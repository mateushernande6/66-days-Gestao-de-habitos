import Groups from "./groups";
import UserGroup from "./userGroup";
const GroupPage = () => {
  const haveGroup = false;
  if (haveGroup) {
    return <UserGroup />;
  } else {
    return <Groups />;
  }
};

export default GroupPage;
