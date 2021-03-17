import axios from "axios";
import { useDispatch } from "react-redux";

const LeaveGroup = () => {
  const dispatch = useDispatch();

  const user = localStorage.getItem("user_id");
  user = user.user_id;

  axios
    .patch(`https://kabit-api.herokuapp.com/users/${user}/`)
    .then((response) => {
      console.log(response.data);
      dispatch(HaveGroupThunk(false));
    });
};

export default LeaveGroup;
