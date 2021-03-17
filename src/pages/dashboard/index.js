import {
  HeaderDashboard,
  InfoHeader,
  DashTitle,
  UserInfo,
  ContainerGraphic,
} from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import GetHabits from "../../components/getHabits";

const Dashborad = () => {
  return (
    <>
      <DashTitle>Dashboard</DashTitle>
      <HeaderDashboard>
        <UserInfo>User: Mateus de souza hernandes</UserInfo>
        <InfoHeader>
          <div>Habits: 3</div>
          <div>Groups: 1</div>
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
            variant="static"
            value={60}
            size={200}
            thickness={6}
          />
          <Box
            top={62}
            left={30}
            bottom={0}
            right={0}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h2"
              component="div"
              color="textSecondary"
            >{`${10}%`}</Typography>
          </Box>
        </div>
      </ContainerGraphic>
    </>
  );
};
export default Dashborad;
