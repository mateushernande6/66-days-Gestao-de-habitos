import { HaveGroup } from "./actions";
import api from "../../../services";
export const HaveGroupThunk = (resp) => async (dispatch) => {
  const userId = JSON.parse(localStorage.getItem("user_id"));
  const userGroup = JSON.parse(localStorage.getItem("userGroup")) || [];
  userGroup.push(userId.user_id);
  await api.get(`/users/${userGroup[0]}/`).then((response) => {
    userGroup.push(response.data.group);
  });
  localStorage.setItem("userGroup", JSON.stringify(userGroup[1]));

  dispatch(HaveGroup(resp));
};
