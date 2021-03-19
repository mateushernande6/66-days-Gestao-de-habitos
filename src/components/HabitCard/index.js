import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHabitsThunk } from "../../store/modules/getHabits/thunk";
import { addHabitProgressThunk } from "../../store/modules/habitProgress/thunk";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card, DivStyled } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../../components/Modal";
import { format } from "date-fns";

const useStyles = makeStyles({
  root: {
    background: "#23b5b58a",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "30%",
    height: "50%",
    "&:hover": {
      background: "#bddad2",
    },
  },
  doneBtn: {
    background: "#23b5b58a",
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

const HabitCard = ({
  habit,
  panel = true,
  token,
  updates,
  deleteMsg,
  doneMsg,
  alreadyDoneMsg,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);

  const handleOpen = (value) => {
    value === "info" ? setModalInfo(true) : setModalInfo(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHabit = async (id) => {
    const list = JSON.parse(localStorage.getItem("habitProgress")) || [];

    const newList = list.filter((elem) => elem.id !== id);

    localStorage.setItem("habitProgress", JSON.stringify(newList));

    await axios.delete(`https://kabit-api.herokuapp.com/habits/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(getHabitsThunk(token, deleteMsg()));

    handleClose();
  };

  const updateAchievement = (id) => {
    const date = format(new Date(), "dd/MM/yyyy");

    dispatch(addHabitProgressThunk(id, date, token));
    dispatch(getHabitsThunk(token, doneMsg()));
  };

  return (
    <Card>
      <DivStyled>
        <p>
          <b>{habit.title}</b>
        </p>
        <p>{`Category: ${habit.category}`}</p>

        {habit.achieved === false ? (
          <p>Status: In Progress</p>
        ) : (
          <p>Status: Completed</p>
        )}
      </DivStyled>

      <DivStyled>
        <div>
          {panel ? (
            <>
              {updates ? (
                <Button
                  className={classes.updatedBtn}
                  color="primary"
                  variant="contained"
                  onClick={() => alreadyDoneMsg()}
                >
                  Updated
                </Button>
              ) : (
                <Button
                  className={classes.doneBtn}
                  color="primary"
                  variant="contained"
                  onClick={() => updateAchievement(habit.id)}
                >
                  Done
                </Button>
              )}

              <FaTrashAlt
                onClick={() => handleOpen("delete")}
                className={classes.trash}
              />
            </>
          ) : (
            <Button
              className={classes.root}
              color="primary"
              variant="contained"
              onClick={() => handleOpen("info")}
            >
              Info
            </Button>
          )}
        </div>
      </DivStyled>

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

{
  /* <DivStyled>
        <p>
          <b>{habit.title}</b>
        </p>
        <p>{`Category: ${habit.category}`}</p>
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
      </DivStyled>

      <DivStyled>
        <div>
          <Button
            className={classes.root}
            color="primary"
            variant="contained"
            onClick={() => handleOpen("info")}
          >
            Info
          </Button>

          {updates ? (
            <Button
              className={classes.updatedBtn}
              color="primary"
              variant="contained"
              onClick={() => alreadyDoneMsg()}
            >
              Updated
            </Button>
          ) : (
            <Button
              className={classes.doneBtn}
              color="primary"
              variant="contained"
              onClick={() => updateAchievement(habit.id)}
            >
              Done
            </Button>
          )}

          <FaTrashAlt
            onClick={() => handleOpen("delete")}
            className={classes.trash}
          />
        </div>
      </DivStyled>

      <Modal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        habit={habit}
        modalInfo={modalInfo}
        deleteHabit={deleteHabit}
      /> */
}
