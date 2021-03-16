import StandardModal from "../../modal";
import { FaTrashAlt } from "react-icons/fa";
import CreateGroup from "../../../pages/groups/modal/modalCreateGroup";
import StandardButton from "../../button";
import { ContentModal } from "./styles";
const RemoveActivies = ({ groupName }) => {
  return (
    <>
      <StandardModal
        buttonColor="default"
        buttonTxt={<FaTrashAlt />}
        buttonHeight="30px"
        buttonMargin="6px"
      >
        <ContentModal>
          <div>Delete Activies?</div>
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

export default RemoveActivies;
