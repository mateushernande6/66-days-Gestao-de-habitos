import { getGroups } from "./actions";
import api from "../../../services";

export const getGroupThunk = (id, token) => async (dispatch, getStore) => {
  const response = await api.get(`/groups/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log("getGroupThunk", response.data);

  dispatch(getGroups(response.data));
};
