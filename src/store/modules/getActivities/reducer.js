const getActivitiesReducer = (state = [], actions) => {
  switch (actions.type) {
    case "getActivities":
      const { list } = actions;
      return list;

    default:
      return state;
  }
};

export default getActivitiesReducer;
