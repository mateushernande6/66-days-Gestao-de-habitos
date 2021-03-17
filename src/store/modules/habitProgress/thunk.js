import { addHabitProgress } from "./actions";
import axios from "axios";

export const addHabitProgressThunk = (id, date, token) => async (
  dispatch,
  getStore
) => {
  const list = JSON.parse(localStorage.getItem("habitProgress")) || [];

  const newList = list.filter((elem) => elem.id !== id);
  const previousObj = list.filter((elem) => elem.id === id);

  if (previousObj.length > 0 && previousObj[0].update.includes(date)) {
    console.log("Já atualizou este hábito hoje");
    return;
  }

  const newHabit = {};
  newHabit.id = id;

  if (previousObj.length === 0) {
    newHabit.update = [date];
  } else {
    newHabit.update = [...previousObj[0].update, date];
  }

  newList.push(newHabit);

  localStorage.setItem("habitProgress", JSON.stringify(newList));

  dispatch(addHabitProgress(newList));

  // Atualiza na API
  const response = await axios.get(
    `https://kabit-api.herokuapp.com/habits/${id}/`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  response.data.how_much_achieved = response.data.how_much_achieved + 1;

  if (response.data.how_much_achieved >= 66) {
    response.data.achieved = true;
  }

  axios.patch(`https://kabit-api.herokuapp.com/habits/${id}/`, response.data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
