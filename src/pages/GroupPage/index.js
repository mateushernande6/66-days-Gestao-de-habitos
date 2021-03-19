import Groups from "../groups";
import UserGroup from "../../components/userGroup";
import { useSelector } from "react-redux";
import PersonalGroup from "../personalGroup";
import { useState } from "react";
import {
  CircleBottom,
  CircleTop,
  Container,
} from "../../Assets/Layout-pattern-pages/Style";

const GroupPage = () => {
  const [pageRender, setPageRender] = useState(false);
  const joinGroup = useSelector((state) => state.haveGroup);
  const haveGroup = JSON.parse(localStorage.getItem("userGroup"));
  console.log(haveGroup);
  console.log(joinGroup);
  if (joinGroup || haveGroup) {
    return (
      <Container>
        <CircleTop />
        <CircleBottom />
        <PersonalGroup />
      </Container>
    );
  } else {
    return (
      <Container>
        <CircleTop />
        <CircleBottom />
        <Groups />
      </Container>
    );
  }
};

export default GroupPage;
