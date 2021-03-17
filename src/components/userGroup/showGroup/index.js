import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import StandardButton from "../../button";
import StandardModal from "../../modal";
import CreateGoals from "../modalCreateGoals";
import RemoveActivies from "../modalRemoveActivies";
import RemoveGoals from "../modalRemoveGoals";
import { addGoalProgressThunk } from "../../../store/modules/goalProgress/thunk";
import { format } from "date-fns";
import { FaTrashAlt } from "react-icons/fa";
import EditGoal from "../../../components/userGroup/editGoal";

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
} from "./styles";
import { HaveGroupThunk } from "../../../store/modules/haveGroup/thunks";
import CreateActivies from "../modalCreateActivies";
const ShowUserGroup = () => {
  const dispatch = useDispatch();

  const [groupInfo, setInfo] = useState(false);
  // const user = localStorage.getItem("token");
  // const userGroup = localStorage.getItem("userGroup") || "";
  const [goals, setGoals] = useState("");
  const [activities, setActivities] = useState("");
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || "";
  });
  const user = JSON.parse(localStorage.getItem("token"));
  const userGroup = JSON.parse(localStorage.getItem("userGroup")) || "";
  let { user_id } = JSON.parse(localStorage.getItem("user_id"));

  console.log(user_id);
  console.log(user);

  const updateGoal = (id) => {
    const date = format(new Date(), "dd/MM/yyyy");

    dispatch(addGoalProgressThunk(id, date, token, groupInfo));
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
    // console.log(userGroup);
    if (userGroup !== "") {
      axios
        .get(`https://kabit-api.herokuapp.com/groups/${userGroup}/`)
        .then((response) => {
          // console.log(response.data);
          setInfo(response.data);
          setGoals(response.data.goals);
          setActivities(response.data.activities);
          // console.log(groupInfo);
          // console.log(goals, activities);
        });
    }
  }, []);

  return (
    <>
      {groupInfo && (
        <MainDiv>
          <InfoGroup>
            <InfoGroupName>
              <div>Group: {groupInfo && groupInfo.name}</div>
            </InfoGroupName>
            <StandardButton onClick={leaveGroup} buttonTxt="Leave Group" />
            <Details>
              <div> Category: {groupInfo && groupInfo.category}</div>
              <div> Users: {groupInfo && groupInfo.users.length}</div>
            </Details>
          </InfoGroup>
          <MainInfo>
            <InfoGoalsBorder>
              <InfoGoals>
                <h5>Goals</h5>

                {groupInfo &&
                  groupInfo.goals.map((value, index) => (
                    <CardGoal key={index}>
                      <GoalInfo>
                        <b>{value.title} &#9;</b>
                        <GoalDifficulty>
                          &#91;{value.difficulty}&#93;
                        </GoalDifficulty>
                        <GoalStatus>
                          {value.achieved ? (
                            <i>
                              Completed
                              {` ${value.how_much_achieved} / ${groupInfo.users.length}`}
                            </i>
                          ) : (
                            <i>
                              In Progress
                              {` ${value.how_much_achieved} / ${groupInfo.users.length}`}
                            </i>
                          )}
                        </GoalStatus>
                      </GoalInfo>
                      <button onClick={() => updateGoal(value.id)}>Done</button>
                      <span>
                        <EditGoal value={value} token={token} />
                      </span>
                      <span>
                        <RemoveGoals
                          groupName={groupInfo.name}
                          value={value}
                          token={token}
                        />
                      </span>
                    </CardGoal>
                  ))}
              </InfoGoals>
              <CreateGoals />
            </InfoGoalsBorder>
            <InfoActiviesBorder>
              <InfoActivies>
                <h5>Activities</h5>

                <div>
                  {groupInfo &&
                    groupInfo.activities.map((value, index) => (
                      <CardActivies key={index}>
                        <ActiviesInfo>
                          {value.title}
                          <ActiviesTime>
                            Activity time:
                            {new Date(
                              Date.parse(value.realization_time)
                            ).toString()}
                          </ActiviesTime>
                          <ActiviesStatus>Waiting</ActiviesStatus>
                        </ActiviesInfo>

                        <span>
                          <RemoveActivies groupName={groupInfo.name} />
                        </span>
                      </CardActivies>
                    ))}
                </div>
              </InfoActivies>
              <CreateActivies />
            </InfoActiviesBorder>
          </MainInfo>
        </MainDiv>
      )}
    </>
  );
};

export default ShowUserGroup;
