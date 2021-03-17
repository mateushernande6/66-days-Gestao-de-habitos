import { addActivitiesProgress } from "./actions";
import api from "../../../services/index";

export const addActivitiesProgressThunk = (
  id,

  token
) => async (dispatch, getStore) => {
  dispatch(addGoalProgress(newList));

  // Atualiza na API
};
