import { getGroups } from "./actions";
import api from "../../../services";

export const getGroupThunk = (id) => async (dispatch, getStore) => {
  const response = await api.get(`/groups/${id}/`);

  console.log("getGroupThunk", response.data);

  dispatch(getGroups(response.data));
};
