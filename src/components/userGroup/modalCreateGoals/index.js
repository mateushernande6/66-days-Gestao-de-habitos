import StandardModal from "../../modal";
import ContentCreateGoal from "./modalContent";

const CreateGoals = () => {
  return (
    <StandardModal
      buttonColor="default"
      buttonTxt="Create Goals"
      buttonHeight="30px"
      buttonMargin="6px"
    >
      <ContentCreateGoal />
    </StandardModal>
  );
};

export default CreateGoals;
