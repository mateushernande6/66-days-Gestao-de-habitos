const initialState = JSON.parse(localStorage.getItem("goalProgress")) || [];

const activitiesProgressReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "@activitiesProgress/ADD":
      const { list } = actions;
      return list;

    default:
      return state;
  }
};

export default activitiesProgressReducer;
