import StandardModal from "../../modal";
import StandardButton from "../../button";
import { FaTrashAlt } from "react-icons/fa";
import { ContentModal } from "./styles";
import api from "../../../services/index";

const RemoveActivities = ({ value, token }) => {
  const deleteActivity = () => {
    api
      .delete(`/activities/${value.id}/`, {
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
          <div>Delete Activity?</div>
          <div>{value.title}</div>
          <div>
            <StandardButton
              onClick={() => deleteActivity()}
              buttonTxt="DELETE"
            />
            <StandardButton buttonTxt="BACK" />
          </div>
        </ContentModal>
      </StandardModal>
    </>
  );
};

export default RemoveActivities;
