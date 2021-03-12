const IsLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "@isLogged/LOGGED":
      const { logged } = action;
      state = logged;
      return state;

    default:
      if (localStorage.getItem("token")) {
        return (state = true);
      }
      return state;
  }
};

export default IsLoggedReducer;
