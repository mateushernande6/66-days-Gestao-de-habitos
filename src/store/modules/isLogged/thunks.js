import { Logged } from "./actions";

export const IsLoggedThunk = (logged) => (dispatch, getState) => {
  dispatch(Logged(logged));
};
