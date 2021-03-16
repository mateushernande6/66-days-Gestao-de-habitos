const getHabitsReducer = (state = [], actions) => {
  switch (actions.type) {
    case "getHabits":
      const { list } = actions;
      return list;

    default:
      return state;
  }
};

export default getHabitsReducer;
