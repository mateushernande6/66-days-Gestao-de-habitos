import axios from "axios";
import { getHabits } from "./actions";

export const getHabitsThunk = (token) => (dispatch) => {
  axios
    .get("https://kabit-api.herokuapp.com/habits/personal/", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((resp) => {
      console.log(resp.data);
      dispatch(getHabits(resp.data));
    });
};
