import StandardModal from "../../modall";
import { FaTrashAlt } from "react-icons/fa";

import api from "../../../services/index";
import { ToastAnimated, showToast } from "../../toastify";
import Button from "@material-ui/core/Button";

const RemoveActivities = ({ value, token }) => {
  const toastify = () =>
    showToast({ type: "delete", message: "Activity Deleted" });

  const deleteActivity = () => {
    api
      .delete(`/activities/${value.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toastify();
        console.log(`${value.id} deletado`);
      });
  };

  return (
    <>
      <ToastAnimated />
      <StandardModal
        buttonColor="default"
        buttonTxt={<FaTrashAlt />}
        buttonHeight="30px"
        buttonMargin="6px"
      >
        <h4 style={{ textAlign: "center" }}>{value.title}</h4>

        <Button
          onClick={() => {
            deleteActivity();
          }}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </StandardModal>
    </>
  );
};

export default RemoveActivities;
