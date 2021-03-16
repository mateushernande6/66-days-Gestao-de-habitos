import StandardModal from "../../modal";
import { FaTrashAlt } from "react-icons/fa";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";

const RemoveGoals = () => {
  return (
    <>
      <StandardModal
        buttonTxt={<FaTrashAlt />}
        buttonHeight="30px"
        buttonMargin="6px"
      >
        <CreateGroup />
      </StandardModal>
    </>
  );
};

export default RemoveGoals;
