import { getGroups } from "./actions";
import api from "../../../services";

export const getGroupThunk = (id) => async (dispatch, getStore) => {
  const response = await api.get(`/groups/${id}`);

  console.log(response.data);

  dispatch(getGroups(response.data));
};
