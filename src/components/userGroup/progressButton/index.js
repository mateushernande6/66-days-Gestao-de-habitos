import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

  const progressSucceed = () => {
    reloadFunction();
    updateGoal(id);
  };

  return (
    <>
      {updates ? (
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
