import StandardModal from "../../modal";
import StandardButton from "../../button";
import { AiFillEdit } from "react-icons/ai";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import { ContentModal } from "./styles";
import api from "../../../services/index";

const editGoal = () => {
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
        buttonTxt={<AiFillEdit />}
        buttonHeight="30px"
        buttonMargin="6px"
      >
        <ContentModal>
          <div>Edit Goal</div>
          <div>
            <StandardButton buttonTxt="DELETE" />
            <StandardButton buttonTxt="BACK" />
          </div>
        </ContentModal>
      </StandardModal>
    </>
  );
};

export default editGoal;
