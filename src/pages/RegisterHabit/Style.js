import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const useStyles = makeStyles((theme) => ({
  spaceBottom: {
    marginBottom: "30px",
  },

  formControl: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  selectWidth: {
    width: "130px",
    margin: "0 auto",
    marginBottom: "50px",
  },

  optionColorAndFont: {
    color: "black",
  },
  radioGrupDisplay: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "50px",
  },

  buttonStyle: {
    width: "200px",
    height: "50px;",
    background: "#23B5B5",
  },
}));

export const Label = styled.label`
  color: black;
  margin-bottom: 11px;
`;

export const Input = styled.input`
  background: lightgray;
  border-radius: 10px;
  width: 440px;
  height: 38px;
  margin-bottom: 50px;
`;
