import styled from "styled-components";
import { Button } from "@material-ui/core";

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

  button {
    background-color: #ed4749;
  }
`;

export const InfoGroupName = styled.div`
  font-weight: bolder;
  box-shadow: 375px 13px 120px #dddad2;
`;

export const Details = styled.div`
  box-shadow: 154px 13px 150px black;
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
  padding-top: 12px;
  height: 80vh;
`;

export const InfoGoalsBorder = styled.div`
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 7px;
  border: solid 2px lightgray;
  flex-basis: 475px;
  overflow-y: scroll;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoGoals = styled.div`
  border-radius: 6px;
  border: solid 2px lightgray;
  padding: 15px;

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
  flex-basis: 475px;
  overflow-y: scroll;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const InfoActivies = styled.div`
  border-radius: 6px;
  border: solid 2px lightgray;
  padding: 15px;
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
  box-shadow: 3px 3px 8px black;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: #bddad266;
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
  color: blue;
`;
export const H1 = styled.h1`
  font-size: 30px;
  color: black;
`;
export const H3 = styled.h3`
  font-size: 18px;
  font-weight: lighter;
  color: black;
`;

export const BoxContainer = styled.div`
  width: 70%;
`;

export const ButtonBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  button {
    @media (max-width: 375px) {
      width: 10px;
    }
  }
`;
