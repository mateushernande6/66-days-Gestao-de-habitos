import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

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
