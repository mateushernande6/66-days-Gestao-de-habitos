import { Modal, Backdrop, Fade, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import CreateGroup from "./modalCreateGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    border: 0,
    height: "26px",
    margin: "4px",
    padding: "0 30px",
    background: "#23b5b594",
    boxShadow: "0 3px 5px 2px rgb(105 220 255 / 30%)",
    borderRadius: "5px",
  },
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

const ModalGroup = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        className={classes.root}
        color="primary"
        variant="contained"
      >
        Create a Group
      </Button>
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
            <CreateGroup />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalGroup;
