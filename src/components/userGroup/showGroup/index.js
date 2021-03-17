import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import StandardModal from "../../modal";
import CreateGoals from "../modalCreateGoals";
import RemoveActivies from "../modalRemoveActivies";
import RemoveGoals from "../modalRemoveGoals";
import { addGoalProgressThunk } from "../../../store/modules/goalProgress/thunk";
import { format } from "date-fns";
import { FaTrashAlt } from "react-icons/fa";

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
  const [groupInfo, setInfo] = useState(false);
  const user = localStorage.getItem("token");
  const userGroup = localStorage.getItem("userGroup") || "";
  const [goals, setGoals] = useState("");
  const [activities, setActivities] = useState("");
  const dispatch = useDispatch();
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || "";
  });

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

  const updateGoal = (id) => {
    const date = format(new Date(), "dd/MM/yyyy");

    dispatch(addGoalProgressThunk(id, date, token, groupInfo));
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
                        {/* <StandardModal buttonTxt={<FaTrashAlt />}>
                          <>
                            <div>Delete Goal?</div>
                            <div>{value.title}</div>
                            <div>
                              <button>Delete</button>
                              <button>Back</button>
                            </div>
                          </>
                        </StandardModal> */}
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
                            Activity time: {value.realization_time}
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
