import axios from "axios";
import { useEffect, useState } from "react";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import StandardModal from "../../modal";
import RemoveGoals from "../modalRemoveGoals";

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
const ShowUserGroup = () => {
  const [userGroup, setGroup] = useState("");
  const [groupInfo, setInfo] = useState(false);
  const user = localStorage.getItem("token");
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

  useEffect(() => {
    console.log(userGroup);
    // if (userGroup !== "") {
    axios
      .get(`https://kabit-api.herokuapp.com/groups/${26}/`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
        console.log(groupInfo);
      });
    // }
  }, []);
  return (
    <>
      {groupInfo && (
        <MainDiv>
          <InfoGroup>
            <InfoGroupName>
              <div>Group: {groupInfo && groupInfo.name}</div>
            </InfoGroupName>
            <StandardModal
              buttonTxt="Leave Group"
              buttonHeight="30px"
              buttonMargin="6px"
            >
              <CreateGroup />
            </StandardModal>
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
                        <RemoveGoals />
                      </span>
                    </CardGoal>
                  ))}
              </InfoGoals>
              <StandardModal buttonColor="primary" buttonTxt="Create Goals">
                <CreateGroup />
              </StandardModal>
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
                            Activity time: {value.realization_time}
                          </ActiviesTime>
                          <ActiviesStatus>Waiting</ActiviesStatus>
                        </ActiviesInfo>

                        <span>
                          <RemoveGoals />
                        </span>
                      </CardActivies>
                    ))}
                </div>
              </InfoActivies>
              <StandardModal buttonColor="primary" buttonTxt="Create Activies">
                <CreateGroup />
              </StandardModal>
            </InfoActiviesBorder>
          </MainInfo>
        </MainDiv>
      )}
    </>
  );
};

export default ShowUserGroup;
