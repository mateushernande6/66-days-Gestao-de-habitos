import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  width: 728px;
  height: 738px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 2px black;
  border-radius: 10px;
  box-shadow: 2px 5px 8px black;
  background-color: white;
  position: relative;
`;

export const ContainerCreateHabit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const P = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  color: black;
  font-size: 14px;
  margin-left: 15px;
  margin-bottom: 0;
`;

export const Divider = styled.div`
  position: absolute;
  width: 728px;
  border-bottom: solid 1px #eef0f7;
  top: 47px;
`;

export const H1 = styled.h1`
  font-size: 30px;
  color: black;
  margin-bottom: 50px;
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: lighter;
  color: black;
  margin-bottom: 70px;
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "200px",
    height: "50px;",
    background: "#23B5B5",
  },
}));
