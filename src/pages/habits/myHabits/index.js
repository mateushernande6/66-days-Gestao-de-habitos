import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHabitsThunk } from "../../../store/modules/getHabits/thunk";
import { StyledContainer, StyledContentBox } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import HabitCard from "../../../components/HabitCard";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { ToastAnimated, showToast } from "../../../components/toastify";
import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#23B5B5",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    padding: "0 30px",
    width: "250px",
    height: "62px",
    display: "block",
    margin: "0 auto",
    gridColumnStart: "1",
    gridColumnEnd: "3",
  },
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
});

const MyHabits = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || "";
  });
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const getHabits = useSelector((state) => state.getHabits);

  useEffect(() => {
    dispatch(getHabitsThunk(token), toastifyRefresh());
  }, []);

  const handleCategoryFilter = (elem, value) => {
    if (value !== "all") {
      return elem.category === value;
    } else {
      return elem;
    }
  };

  const handleStatusFilter = (elem, value) => {
    if (value === "all") {
      return elem;
    } else if (value === "in progress") {
      return elem.achieved === false;
    } else {
      return elem.achieved === true;
    }
  };

  const isUpgradeableFunction = (arr) => {
    const today = format(new Date(), "dd/MM/yyyy");

    const isUpdate = arr.filter((elem) => elem === today).length > 0;

    if (isUpdate) {
      return true;
    } else {
      return false;
    }
  };

  const toastifyRefresh = () =>
    showToast({ type: "send", message: "Habits Panel is updated" });

  const toastifyDelete = () =>
    showToast({ type: "delete", message: "Habit deleted" });

  const toastifyDone = () =>
    showToast({ type: "create", message: "Congrats! Habit's done today" });

  const toastifyAlreadyDone = () =>
    showToast({ type: "delete", message: "You've already done this today" });

  return (
    <StyledContainer>
      <ToastAnimated />

      <StyledContentBox>
        <header>
          <p>Habits Panel</p>
          {/* <select
            name="status"
            id="level"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select> */}

          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <Select
              id="demo-simple-select-outlined"
              className={classes.selectWidth}
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="in progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>

          {/* <select
            name="Category"
            id="level"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option selected value="all">
              All
            </option>
            <option value="career">Career</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="study">Study</option>
          </select> */}

          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <Select
              id="demo-simple-select-outlined"
              className={classes.selectWidth}
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="career">Career</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="study">Study</MenuItem>
            </Select>
          </FormControl>
        </header>
        <main>
          {getHabits &&
            getHabits
              .sort(function (a, b) {
                return a.updates.length < b.updates.length
                  ? -1
                  : a.updates.length > b.updates.length
                  ? 1
                  : 0;
              })
              .filter(
                (elem) =>
                  handleCategoryFilter(elem, filterCategory) &&
                  handleStatusFilter(elem, filterStatus)
              )
              .map((elem, index) => (
                <HabitCard
                  key={index}
                  habit={elem}
                  token={token}
                  updates={isUpgradeableFunction(elem.updates)}
                  deleteMsg={toastifyDelete}
                  doneMsg={toastifyDone}
                  alreadyDoneMsg={toastifyAlreadyDone}
                />
              ))}
        </main>
      </StyledContentBox>

      <Button
        onClick={() => history.push("/register-habit")}
        className={classes.root}
        color="primary"
        variant="contained"
      >
        Create Habit
      </Button>
    </StyledContainer>
  );
};

export default MyHabits;
