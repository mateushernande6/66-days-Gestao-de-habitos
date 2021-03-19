import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGroupThunk } from "../../../store/modules/getGroups/thunk";

const useStyles = makeStyles({
  root: {
    background: "#DDDDDD",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "30%",
    height: "50%",
  },
  doneBtn: {
    background: "#23B5B5",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "30%",
    height: "50%",
  },
  updatedBtn: {
    background: "#F25456",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "30%",
    height: "50%",
  },
  trash: {
    width: "20%",
    height: "30%",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const ProgressButton = ({
  reloadFunction,
  updateGoal,
  id,
  updates = false,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(0);
  const [progress, setProgress] = useState(false);
  const userGroup = JSON.parse(localStorage.getItem("userGroup"));
  const progressSucceed = () => {
    reloadFunction();
    updateGoal(id);
    setCheck(check + 1);
  };

  const checkProgress = () => {
    const goalProgress = JSON.parse(localStorage.getItem("goalProgress")) || [];

    setProgress(false);

    if (goalProgress.filter((elem) => elem.id === id).length > 0) {
      setProgress(true);
    }
  };

  useEffect(() => {
    checkProgress();
  }, [check]);

  return (
    <>
      {progress ? (
        <Button
          className={classes.updatedBtn}
          color="primary"
          variant="contained"
        >
          Updated
        </Button>
      ) : (
        <Button
          className={classes.doneBtn}
          color="primary"
          variant="contained"
          onClick={() => progressSucceed()}
        >
          Done
        </Button>
      )}
    </>
  );
};

export default ProgressButton;
