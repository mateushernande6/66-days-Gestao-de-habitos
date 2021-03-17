import StandardModal from "../../modal";
import StandardButton from "../../button";
import { FaTrashAlt } from "react-icons/fa";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import { ContentModal } from "./styles";
import api from "../../../services/index";

const updateGoal = ({ value, token }) => {
  // const deleteGoal = () => {
  //   const previousProgress = JSON.parse(localStorage.getItem("goalProgress"));

  //   const newProgress = previousProgress.filter((elem) => elem.id !== value.id);

  //   if (newProgress.length !== 0) {
  //     localStorage.setItem("goalProgress", JSON.stringify(newProgress));
  //   }

  //   api
  //     .patch(`/goals/${value.id}/`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then(console.log(`${value.id} deletado`));
  // };

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
            <StandardButton buttonTxt="BACK" />
          </div>
        </ContentModal>
      </StandardModal>
    </>
  );
};

export default RemoveGoals;
