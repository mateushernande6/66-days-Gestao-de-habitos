import StandardModal from "../../modal";
import StandardButton from "../../button";
import { FaTrashAlt } from "react-icons/fa";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import { ContentModal } from "./styles";
import api from "../../../services/index";
import { ToastAnimated, showToast } from "../../toastify";

const RemoveGoals = ({ value, token }) => {
  const toastify = () => showToast({ type: "delete", message: "Goal Deleted" });
  const deleteGoal = () => {
    const previousProgress =
      JSON.parse(localStorage.getItem("goalProgress")) || [];

    const newProgress = previousProgress.filter((elem) => elem.id !== value.id);

    localStorage.setItem("goalProgress", JSON.stringify(newProgress));

    api
      .delete(`/goals/${value.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(console.log(`${value.id} deletado`));
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
        <ContentModal>
          <div>Delete Goals?</div>
          <div>{value.title}</div>
          <div>
            <StandardButton
              onClick={() => {
                toastify();
                deleteGoal();
              }}
              buttonTxt="DELETE"
            />
          </div>
        </ContentModal>
      </StandardModal>
    </>
  );
};

export default RemoveGoals;
