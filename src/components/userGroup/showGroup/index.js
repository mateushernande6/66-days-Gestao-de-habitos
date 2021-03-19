import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import StandardButton from "../../button";
import StandardModal from "../../modall";
import CreateGoals from "../modalCreateGoals";
import RemoveActivies from "../modalRemoveActivies";
import RemoveGoals from "../modalRemoveGoals";
import { addGoalProgressThunk } from "../../../store/modules/goalProgress/thunk";
import { getGroupThunk } from "../../../store/modules/getGroups/thunk";
import { format } from "date-fns";
import { FaTrashAlt } from "react-icons/fa";
import EditGoal from "../editGoal";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Details,
  InfoGroup,
  InfoGroupName,
  InfoGoals,
  InfoActivies,
  MainDiv,
  MainInfo,
  InfoGoalsBorder,
  InfoActiviesBorder,
  CardGoal,
  GoalInfo,
  GoalDifficulty,
  GoalStatus,
  CardActivies,
  ActiviesInfo,
  ActiviesStatus,
  ActiviesTime,
  H1,
  H3,
  BoxContainer,
  ButtonBox,
  ButtonStyled,
} from "./styles";
import { HaveGroupThunk } from "../../../store/modules/haveGroup/thunks";
import CreateActivies from "../modalCreateActivies";
import { ToastAnimated, showToast } from "../../toastify";
import { useSelector } from "react-redux";
import EditActivity from "../editActivity";
import { getGoalsThunk } from "../../../store/modules/getGoals/thunk";
import { getActivitiesThunk } from "../../../store/modules/getActivities/thunk";
import api from "../../../services";
import ProgressButton from "../progressButton/index";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    background: "#DDDDDD",
    border: 0,
    borderRadius: 3,
    color: "black",
    width: "30px",
    height: "50%",
    margin: "6px",
  },
});

const ShowUserGroup = () => {
  const dispatch = useDispatch();
  const myGroup = useSelector((state) => state.getGroups);
  const [groupInfo, setInfo] = useState(false);
  // const user = localStorage.getItem("token");
  // const userGroup = localStorage.getItem("userGroup") || "";

  const [groupChange, setGroupChange] = useState(true);
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || "";
  });
  const user = JSON.parse(localStorage.getItem("token"));
  const userGroup = JSON.parse(localStorage.getItem("userGroup")) || "";
  let { user_id } = JSON.parse(localStorage.getItem("user_id"));
  const [reload, setReload] = useState(0);
  const today = format(new Date(), "dd/MM/yyyy");
  const goalId = localStorage.getItem("goalId") || "";
  const goals = useSelector((state) => state.getGoals);
  const activities = useSelector((state) => state.getActivities);
  const classes = useStyles();

  console.log("user_id", user_id);
  console.log(user);

  const updateGoal = (id) => {
    const date = format(new Date(), "dd/MM/yyyy");

    localStorage.setItem("goalId", id);
    reloadFunction();

    dispatch(addGoalProgressThunk(id, date, token, myGroup));
    dispatch(getGroupThunk(userGroup));
  };

  const reloadFunction = () => {
    setReload(reload + 1);
  };

  const leaveGroup = () => {
    axios
      .patch(`https://kabit-api.herokuapp.com/users/${user_id}/`, {
        group: null,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(HaveGroupThunk(false));
      });
  };

  useEffect(() => {
    dispatch(getGroupThunk(userGroup));
  }, []);

  useEffect(() => {
    dispatch(getGroupThunk(userGroup));
    dispatch(getGoalsThunk(userGroup));
    dispatch(getActivitiesThunk(userGroup));
  }, [reload]);

  console.log("myGroup", myGroup);

  return (
    <>
      <ToastAnimated />
      {myGroup && (
        <MainDiv>
          <InfoGroup>
            <InfoGroupName>
              <H1>Group: {myGroup && myGroup.name}</H1>
            </InfoGroupName>
            <StandardButton
              onClick={() => {
                leaveGroup();
              }}
              buttonTxt="Leave Group"
            />
            <Details>
              <H3> Category: {myGroup && myGroup.category}</H3>
              <H3> Users: {myGroup.users && myGroup.users.length}</H3>
            </Details>
          </InfoGroup>
          <MainInfo>
            <InfoGoalsBorder>
              <InfoGoals>
                <H3>
                  <b>Goals</b>
                </H3>

                {myGroup.goals &&
                  myGroup.goals
                    .sort(function (a, b) {
                      return a.how_much_achieved < b.how_much_achieved
                        ? -1
                        : a.how_much_achieved > b.how_much_achieved
                        ? 1
                        : 0;
                    })
                    .map((value, index) => (
                      <CardGoal key={index}>
                        <BoxContainer>
                          <GoalInfo>
                            <b>{value.title} &#9;</b>
                            <GoalDifficulty>
                              &#91;{value.difficulty}&#93;
                            </GoalDifficulty>
                            <GoalStatus>
                              {value.achieved ? (
                                <i>
                                  Completed
                                  {` ${value.how_much_achieved} / ${
                                    myGroup.users && myGroup.users.length
                                  }`}
                                </i>
                              ) : (
                                <i>
                                  In Progress
                                  {` ${value.how_much_achieved} / ${
                                    myGroup.users && myGroup.users.length
                                  }`}
                                </i>
                              )}
                            </GoalStatus>
                          </GoalInfo>
                        </BoxContainer>

                        <ButtonBox>
                          <div>
                            <Button
                              className={classes.button}
                              color="primary"
                              variant="contained"
                              onClick={() => {
                                reloadFunction();
                                updateGoal(value.id);
                              }}
                            >
                              Done
                            </Button>

                            <span>
                              <EditGoal
                                value={value}
                                token={token}
                                reloadFunction={reloadFunction}
                              />
                            </span>
                            <span>
                              <RemoveGoals
                                groupName={myGroup.name}
                                value={value}
                                token={token}
                                reloadFunction={reloadFunction}
                              />
                            </span>
                          </div>
                        </ButtonBox>
                      </CardGoal>
                    ))}
              </InfoGoals>
              <CreateGoals reloadFunction={reloadFunction} />
            </InfoGoalsBorder>

            <InfoActiviesBorder>
              <InfoActivies>
                <H3>
                  <b>Activities</b>
                </H3>

                <div>
                  {myGroup.activities &&
                    myGroup.activities.map((value, index) => (
                      <CardActivies key={index}>
                        <BoxContainer>
                          <ActiviesInfo>
                            {value.title}
                            <ActiviesTime>
                              Activity time:
                              {new Date(
                                Date.parse(value.realization_time)
                              ).toString()}
                            </ActiviesTime>

                            {/* <ActiviesStatus>Waiting</ActiviesStatus> */}
                          </ActiviesInfo>
                        </BoxContainer>
                        <ButtonBox>
                          <EditActivity
                            value={value}
                            token={token}
                            reloadFunction={reloadFunction}
                          />
                          <span>
                            <RemoveActivies
                              groupName={myGroup.name}
                              value={value}
                              token={token}
                              reloadFunction={reloadFunction}
                            />
                          </span>
                        </ButtonBox>
                      </CardActivies>
                    ))}
                </div>
              </InfoActivies>
              <CreateActivies reloadFunction={reloadFunction} />
            </InfoActiviesBorder>
          </MainInfo>
        </MainDiv>
      )}
    </>
  );
};

export default ShowUserGroup;
