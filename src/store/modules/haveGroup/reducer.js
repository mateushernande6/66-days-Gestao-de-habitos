import { HaveGroup } from "./actions";
const group = localStorage.getItem("userGroup");
const HaveGroupReducer = (state = group, action) => {
  switch (action.type) {
    case "@haveGroup/HAVE":
      const { resp } = action;
      state = resp;
      return state;

    default:
      return state;
  }
};
export default HaveGroupReducer;
