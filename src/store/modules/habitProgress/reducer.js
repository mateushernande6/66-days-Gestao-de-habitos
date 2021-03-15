const initialState = JSON.parse(localStorage.getItem("habitProgress")) || [];

const habitProgressReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_PROGRESS":
      const { list } = actions;
      return list;

    default:
      return state;
  }
};

export default habitProgressReducer;
