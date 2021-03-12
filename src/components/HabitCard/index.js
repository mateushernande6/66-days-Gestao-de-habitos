import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "./styles";

const useStyles = makeStyles({
  root: {
    background: "#DDDDDD",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "40%",
    height: "80%",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
});

const HabitCard = ({ habit }) => {
  const classes = useStyles();

  return (
    <Card>
      <div>
        <p>
          <b>Outing</b>
        </p>
        <p>
          <i>Category: Health</i>
        </p>
        <p>Status: Completed</p>
      </div>

      <div>
        <Button className={classes.root} color="primary" variant="contained">
          Info
        </Button>
      </div>
    </Card>
  );
};

export default HabitCard;
