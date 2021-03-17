import StandardModal from "../../modal";
import StandardButton from "../../button";
import { FaTrashAlt } from "react-icons/fa";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import { ContentModal } from "./styles";
import api from "../../../services/index";

const RemoveGoals = ({ value, token }) => {
  const deleteGoal = () => {
    const previousProgress = JSON.parse(localStorage.getItem("goalProgress"));
    let newProgress = "";

    if (previousProgress.length !== 0) {
      newProgress = previousProgress.filter((elem) => elem.id !== value.id);
    }

    if (newProgress.length !== 0) {
      localStorage.setItem("goalProgress", JSON.stringify(newProgress));
    }

    api
      .delete(`/goals/${value.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(console.log(`${value.id} deletado`));
  };

  return (
    <>
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
            <StandardButton onClick={() => deleteGoal()} buttonTxt="DELETE" />
          </div>
        </ContentModal>
      </StandardModal>
    </>
  );
};

export default RemoveGoals;
