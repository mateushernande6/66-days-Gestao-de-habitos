import { Logged } from "./actions";
import api from "../../../services";

export const IsLoggedThunk = (logged) => async (dispatch, getState) => {
  if (logged === true) {
    const userId = JSON.parse(localStorage.getItem("user_id"));
    const userGroup = JSON.parse(localStorage.getItem("userGroup")) || [];
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

    userGroup.push(userId.user_id);
    await api.get(`/users/${userGroup[0]}/`).then((response) => {
      userGroup.push(response.data.group);
      userInfo.push(response.data);
    });
    localStorage.setItem("userGroup", JSON.stringify(userGroup[1]));
    localStorage.setItem("userInfo", JSON.stringify(userInfo[0]));

    dispatch(Logged(logged));
  } else {
    localStorage.clear();
    dispatch(Logged(logged));
  }
};
