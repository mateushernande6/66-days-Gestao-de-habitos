import {
  HeaderDashboard,
  InfoHeader,
  DashTitle,
  UserInfo,
  ContainerGraphic,
  Container,
  CircleTop,
  CircleBottom,
  ContainerCreateCard,
} from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import GetHabits from "../../components/getHabits";
import axios from "axios";
import { useState, useEffect } from "react";

const Dashborad = () => {
  const [habits, setHabits] = useState([]);
  const [progress, setProgress] = useState(0);
  const [userGroup, setUserGroup] = useState();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get("https://kabit-api.herokuapp.com/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
        const qnt = response.data.length;
        const initialValue = 0;
        const theProgress = response.data.reduce(
          (acc, current) =>
            acc + Math.round((current.how_much_achieved / 66) * 100),
          initialValue
        );
        setProgress(Math.round(theProgress / qnt));
        setUserGroup(JSON.parse(localStorage.getItem("userGroup")));
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
      });
  }, []);
  console.log("userInfo", userInfo);
  return (
    <Container>
      <CircleBottom />
      <CircleTop />
      <DashTitle>Dashboard</DashTitle>
      <HeaderDashboard>
        <UserInfo>
          {" "}
          <strong> @</strong>
          {userInfo?.username}
        </UserInfo>
        <InfoHeader>
          <div>Habits: {habits.length}</div>
          <div>Groups: {userGroup ? "1" : "0"}</div>
        </InfoHeader>
      </HeaderDashboard>
      <ContainerGraphic>
        <div className="containerTitle">
          <h2>Habits</h2>
        </div>
        <div className="infos">
          <div className="titlePanel">Habits panel</div>
          <GetHabits />
        </div>
        <div className="graphic">
          <CircularProgress
            className="fixGraphic"
            variant="determinate"
            value={100}
            size={200}
            thickness={6}
          />

          <CircularProgress
            className="theGraphic"
            variant="determinate"
            value={progress}
            size={200}
            thickness={6}
          />
          <Typography
            className="progressTxt"
            variant="h2"
            component="div"
            color="textSecondary"
          >{`${progress}%`}</Typography>
        </div>
      </ContainerGraphic>
    </Container>
  );
};
export default Dashborad;
