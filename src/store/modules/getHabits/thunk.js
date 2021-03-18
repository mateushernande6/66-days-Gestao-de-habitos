import axios from "axios";
import { getHabits } from "./actions";

export const getHabitsThunk = (token, toastify = "") => async (dispatch) => {
  if (toastify !== "") {
    toastify();
  }

  await axios
    .get("https://kabit-api.herokuapp.com/habits/personal/", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((resp) => {
      console.log("resp.data", resp.data);

      const updates = JSON.parse(localStorage.getItem("habitProgress")) || [];

      resp.data.map((elem) => {
        const verify = updates.filter((habit) => habit.id === elem.id);

        if (verify.length > 0) {
          elem.updates = verify[0].update;
        } else {
          elem.updates = [];
        }
      });

      dispatch(getHabits(resp.data));
    });
};
