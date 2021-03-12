import { StyledContainer, StyledContentBox } from "./styles";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HabitCard from "../../../components/HabitCard";

const useStyles = makeStyles({
  root: {
    background: "#23B5B5",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    height: 26,
    padding: "0 30px",
    margin: "4px",
    width: "250px",
    height: "62px",
    display: "block",
    margin: "0 auto",
    gridColumnStart: "1",
    gridColumnEnd: "3",
  },
});

const MyHabits = () => {
  const classes = useStyles();

  return (
    <StyledContainer>
      <StyledContentBox>
        <header>
          <p>Habits Panel</p>
          <select name="status" id="level">
            <option value="All">All</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <select name="Category" id="level">
            <option value="All">All</option>
            <option value="Career">Career</option>
            <option value="Food">Food</option>
            <option value="Health">Health</option>
            <option value="Study">Study</option>
          </select>
        </header>
        <main>
          <HabitCard />
        </main>
      </StyledContentBox>

      <StyledContentBox>
        <header>
          <p>Today's Habits</p>
          <select name="Category" id="level">
            <option value="All">All</option>
            <option value="Career">Career</option>
            <option value="Food">Food</option>
            <option value="Health">Health</option>
            <option value="Study">Study</option>
          </select>
        </header>
        <main></main>
      </StyledContentBox>

      <Button className={classes.root} color="primary" variant="contained">
        Create Habit
      </Button>
    </StyledContainer>
  );
};

export default MyHabits;
