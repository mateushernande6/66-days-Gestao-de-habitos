import StandardModal from "../../modall";
import { FaTrashAlt } from "react-icons/fa";
import api from "../../../services/index";
import { ToastAnimated, showToast } from "../../toastify";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { getGroupThunk } from "../../../store/modules/getGroups/thunk";

const RemoveGoals = ({ value, token, reloadFunction }) => {
  const toastify = () => showToast({ type: "delete", message: "Goal Deleted" });
  const dispatch = useDispatch();
  const userGroup = JSON.parse(localStorage.getItem("userGroup")) || "";

  const deleteGoal = () => {
    const previousProgress =
      JSON.parse(localStorage.getItem("goalProgress")) || [];

    const newProgress = previousProgress.filter((elem) => elem.id !== value.id);

    localStorage.setItem("goalProgress", JSON.stringify(newProgress));

    api
      .delete(`/goals/${value.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toastify();
        console.log(`${value.id} deletado`);
      });

    reloadFunction();
    dispatch(getGroupThunk(userGroup));
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
            console.log("deletou");
            deleteGoal();
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

export default RemoveGoals;
