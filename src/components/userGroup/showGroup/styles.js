import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-flow: column;
  color: black;
  width: 80%;
  max-height: 100vh;
  position: relative;
`;
export const InfoGroup = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  border: solid 2px lightgray;
  padding: 10px;
`;

export const InfoGroupName = styled.div`
  font-weight: bolder;
`;

export const Details = styled.div`
  border: solid 2px lightgray;
  border-radius: 6px;
  display: flex;
  flex-flow: row wrap;
  flex-basis: 354px;
  justify-content: space-around;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 12px;
`;

export const InfoGoalsBorder = styled.div`
  background-color: #ffffff;

  padding: 8px;
  border-radius: 7px;
  border: solid 2px lightgray;
  flex-basis: 430px;
  overflow-y: scroll;
  max-height: 75vh;
  @media (max-width: 1200px) {
    max-height: 33vh;
    margin-bottom: 10px;
  }
`;

export const InfoGoals = styled.div`
  border-radius: 6px;
  border: solid 2px lightgray;

  padding: 8px;
  h5 {
    margin: 0px;
    margin-bottom: 15px;
    padding: 0px;
    text-align: left;
    padding-left: 6px;
  }
`;
export const InfoActiviesBorder = styled.div`
  background-color: #ffffff;

  border-radius: 7px;
  border: solid 2px lightgray;
  padding: 8px;
  flex-basis: 430px;
  overflow-y: scroll;
  max-height: 75vh;
  @media (max-width: 1200px) {
    max-height: 33vh;
  }
`;

export const InfoActivies = styled.div`
  border-radius: 6px;
  border: solid 2px lightgray;

  padding: 8px;
  h5 {
    margin: 0px;
    margin-bottom: 15px;
    padding: 0px;
    text-align: left;
    padding-left: 6px;
  }
`;

export const CardGoal = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  padding-left: 18px;
  border: 1.5px solid black;
  box-shadow: 1px 3px 14px #868585;
  border-radius: 6px;
  margin-bottom: 10px;
`;
export const GoalInfo = styled.div`
  width: 74%;
`;
export const GoalDifficulty = styled.span`
  color: blue;
`;
export const GoalStatus = styled.div``;

export const CardActivies = styled(CardGoal)``;
export const ActiviesInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 74%;
`;
export const ActiviesStatus = styled.div``;
export const ActiviesTime = styled.div`
  color: red;
`;
