import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getHabitsThunk } from "../../store/modules/getHabits/thunk";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../../components/Modal";

const useStyles = makeStyles({
  root: {
    background: "#DDDDDD",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "40%",
    height: "80%",
  },
  doneBtn: {
    background: "#23B5B5",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "40%",
    height: "80%",
  },
  trash: {
    width: "7%",
  },
});

const HabitCard = ({ habit, panel = true, token }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = (value) => {
    value === "info" ? setModalInfo(true) : setModalInfo(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHabit = async (id) => {
    await axios.delete(`https://kabit-api.herokuapp.com/habits/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(getHabitsThunk(token));

    handleClose();
  };

  const updateAchievement = async (id) => {
    const response = await axios.get(
      `https://kabit-api.herokuapp.com/habits/${id}/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    response.data.how_much_achieved = response.data.how_much_achieved + 1;

    if (response.data.how_much_achieved >= 66) {
      response.data.achieved = true;
    }

    console.log(response.data);

    axios.patch(
      `https://kabit-api.herokuapp.com/habits/${id}/`,
      response.data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    dispatch(getHabitsThunk(token));
  };

  return (
    <Card>
      <div>
        <p>
          <b>{habit.title}</b>
        </p>
        <p>
          <i>{`Category: ${habit.category}`}</i>
        </p>
        {panel ? (
          <>
            {habit.achieved === false ? (
              <p>Status: In Progress</p>
            ) : (
              <p>Status: Completed</p>
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div>
        {panel ? (
          <div>
            <Button
              className={classes.root}
              color="primary"
              variant="contained"
              onClick={() => handleOpen("info")}
            >
              Info
            </Button>
            <FaTrashAlt
              onClick={() => handleOpen("delete")}
              className={classes.trash}
            />
          </div>
        ) : (
          <div>
            <Button
              className={classes.doneBtn}
              color="primary"
              variant="contained"
              onClick={() => updateAchievement(habit.id)}
            >
              Done
            </Button>
          </div>
        )}
      </div>

      <Modal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        habit={habit}
        modalInfo={modalInfo}
        deleteHabit={deleteHabit}
      />
    </Card>
  );
};

export default HabitCard;
