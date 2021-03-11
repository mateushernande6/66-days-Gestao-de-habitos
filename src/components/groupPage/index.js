import Groups from "./groups";
import UserGroup from "./userGroup";

const GroupPage = () => {
  const [haveGroup, setGroup] = useState(false);
  if (haveGroup) {
    return <UserGroup />;
  } else {
    return <Groups />;
  }
};

export default GroupPage;
