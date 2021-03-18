import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Buttons from "../button";
import { useState } from "react";
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
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  },
}));

const StandardModal = ({
  children,
  buttonTxt,
  buttonColor,
  buttonHeight,
  buttonMargin,
  id,
  thisOpen,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    // (thisOpen === true &&
    localStorage.setItem("idHabit", JSON.stringify(id));
    // )
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Buttons
        type="button"
        buttonTxt={buttonTxt}
        onClick={() => handleOpen(id)}
        color={buttonColor}
        height={buttonHeight}
        margin={buttonMargin}
        id={id}
        // open={thisOpen}
      />

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
            {children}
            <Buttons
              style={{ margin: "0 auto" }}
              type="button"
              buttonTxt="Close"
              onClick={handleClose}
              height={buttonHeight}
              margin={buttonMargin}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default StandardModal;
