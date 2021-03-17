const initialState = JSON.parse(localStorage.getItem("goalProgress")) || [];

const goalProgressReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "@goalProgress/ADD":
      const { list } = actions;
      return list;

    default:
      return state;
  }
};

export default goalProgressReducer;
