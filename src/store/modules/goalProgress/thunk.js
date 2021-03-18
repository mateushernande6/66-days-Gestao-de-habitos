import { addGoalProgress } from "./actions";
import api from "../../../services/index";

export const addGoalProgressThunk = (id, date, token, groupData) => async (
  dispatch,
  getStore
) => {
  const list = JSON.parse(localStorage.getItem("goalProgress")) || [];

  const newList = list.filter((elem) => elem.id !== id);
  const previousList = list.filter((elem) => elem.id === id);

  if (previousList.length > 0 && previousList[0].updates.includes(date)) {
    console.log("O user já contribuiu com a meta!");
    return;
  }

  const refreshGoal = {};
  refreshGoal.id = id;

  if (previousList.length === 0) {
    refreshGoal.updates = [date];
  } else {
    refreshGoal.updates = [...previousList[0].updates, date];
  }

  newList.push(refreshGoal);

  localStorage.setItem("goalProgress", JSON.stringify(newList));

  dispatch(addGoalProgress(newList));

  // Atualiza na API
  const goal = await api.get(`/goals/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  goal.data.how_much_achieved = goal.data.how_much_achieved + 1;

  if (goal.data.how_much_achieved >= groupData.users.length) {
    goal.data.achieved = true;
  }

  api.patch(`/goals/${id}/`, goal.data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
