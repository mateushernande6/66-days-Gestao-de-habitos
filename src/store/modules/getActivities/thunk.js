import api from "../../../services/index";
import { getActivities } from "./actions";

export const getActivitiesThunk = (id) => async (dispatch, getStore) => {
  const response = await api.get(`/activities/?group=${id}`);

  dispatch(getActivities(response.data.results));
};
