import { HaveGroup } from "./actions";

const HaveGroupReducer = (state = false, action) => {
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
