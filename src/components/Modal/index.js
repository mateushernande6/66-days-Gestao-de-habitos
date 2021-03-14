import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({
  open,
  handleClose,
  habit,
  modalInfo = true,
  deleteHabit,
}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {modalInfo ? (
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Habit info</h2>
              <p id="transition-modal-description">{`Habit: ${habit.title}`}</p>
              <p id="transition-modal-description">{`Category: ${habit.category}`}</p>
              <p id="transition-modal-description">{`Difficulty: ${habit.difficulty}`}</p>
              <p id="transition-modal-description">{`Frequency: ${habit.frequency}`}</p>
              <p id="transition-modal-description">{`Achieved: ${
                habit.achieved ? "Completed" : "In Progress"
              }`}</p>
              <p id="transition-modal-description">{`Progress: ${Math.round(
                (habit.how_much_achieved / 66) * 100
              )}%`}</p>
            </div>
          </Fade>
        ) : (
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Confirm delete?</h2>
              <button
                onClick={() => deleteHabit(habit.id)}
                id="transition-modal-description"
              >
                Delete
              </button>
              <button onClick={handleClose} id="transition-modal-description">
                Back
              </button>
            </div>
          </Fade>
        )}
      </Modal>
    </div>
  );
}
