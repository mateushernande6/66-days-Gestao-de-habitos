import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    "& > *": {
      height: (props) => props.height,
      margin: (props) => props.margin,
    },
  },
});

const StandardButton = ({ type, buttonTxt, onClick = null, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Button
        type={type}
        className={classes.root}
        variant="contained"
        onClick={onClick}
      >
        {buttonTxt}
      </Button>
    </div>
  );
};

export default StandardButton;
