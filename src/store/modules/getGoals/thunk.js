import api from "../../../services/index";
import { getGoals } from "./actions";

export const getGoalsThunk = (id) => async (dispatch, getStore) => {
  const response = await api.get(`/goals/?group=${id}`);

  dispatch(getGoals(response.data.results));
};
