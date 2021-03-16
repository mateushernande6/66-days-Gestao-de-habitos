import StandardModal from "../../modal";
import StandardButton from "../../button";
import { FaTrashAlt } from "react-icons/fa";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import { ContentModal } from "./styles";
const RemoveGoals = ({ groupName }) => {
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
          <div>{groupName}</div>
          <div>
            <StandardButton buttonTxt="DELETE" />
            <StandardButton buttonTxt="BACK" />
          </div>
        </ContentModal>
      </StandardModal>
    </>
  );
};

export default RemoveGoals;
