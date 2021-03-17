import axios from "axios";
import { useEffect, useState } from "react";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import StandardButton from "../../button";
import StandardModal from "../../modal";
import CreateGoals from "../modalCreateGoals";
import RemoveActivies from "../modalRemoveActivies";
import RemoveGoals from "../modalRemoveGoals";
import { useDispatch } from "react-redux";

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
  const user = JSON.parse(localStorage.getItem("token"));
  const userGroup = JSON.parse(localStorage.getItem("userGroup")) || "";
  let { user_id } = JSON.parse(localStorage.getItem("user_id"));

  console.log(user_id);
  console.log(user);
  // useEffect(() => {
  //   axios
  //     .get(`https://kabit-api.herokuapp.com/users/${8}/`)
  //     .then((response) => {
  //       setGroup(response.data.group);
  //       console.log(response.data);
  //       console.log(userGroup);
  //     });
  // }, []);
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
    console.log(userGroup);
    if (userGroup !== "") {
      axios
        .get(`https://kabit-api.herokuapp.com/groups/${userGroup}/`)
        .then((response) => {
          console.log(response.data);
          setInfo(response.data);
          console.log(groupInfo);
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
                          {value.difficulty ? (
                            <i>In Progress</i>
                          ) : (
                            <i>Completed</i>
                          )}
                        </GoalStatus>
                      </GoalInfo>
                      <span>
                        <RemoveGoals groupName={groupInfo.name} />
                      </span>
                    </CardGoal>
                  ))}
              </InfoGoals>
              <CreateGoals />
            </InfoGoalsBorder>
            <InfoActiviesBorder>
              <InfoActivies>
                <h5>Activies</h5>

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
