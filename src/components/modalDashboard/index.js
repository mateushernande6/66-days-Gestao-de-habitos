import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal, Backdrop, Fade } from "@material-ui/core";

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
    textAlign: "center",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  deleteBtn: {
    background: "#F25456",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "40%",
    height: "80%",
  },
  backBtn: {
    background: "#23B5B5",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    width: "40%",
    height: "80%",
  },
}));

export default function ModalDashboard({
  open,
  handleClose,
  habit,
  modalInfo = true,
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
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Habit info</h2>
            <p id="transition-modal-description">{`Title: ${habit.title}`}</p>
            <p id="transition-modal-description">{`Category: ${habit.category}`}</p>
            <p id="transition-modal-description">{`Difficulty: ${habit.difficulty}`}</p>
            <p id="transition-modal-description">{`Frequency: ${habit.frequency}`}</p>
            <p id="transition-modal-description">{`Achieved: ${
              habit.achieved ? "Completed" : "In Progress"
            }`}</p>
            <p id="transition-modal-description">{`Progress: ${Math.round(
              (habit.how_much_achieved / 66) * 100
            )}%`}</p>

            <Button
              className={classes.backBtn}
              color="primary"
              variant="contained"
              onClick={handleClose}
            >
              Back
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
