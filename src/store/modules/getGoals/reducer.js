const getGoalsReducer = (state = [], actions) => {
  switch (actions.type) {
    case "getGoals":
      const { list } = actions;
      return list;

    default:
      return state;
  }
};

export default getGoalsReducer;
