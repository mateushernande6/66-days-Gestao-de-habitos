import { HaveGroup } from "./actions";
export const HaveGroupThunk = (resp) => (dispatch) => {
  dispatch(HaveGroup(resp));
};
