import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import IsLoggedReducer from "./modules/isLogged/reducer";
import HaveGroupReducer from "./modules/haveGroup/reducer";
import getHabitsReducer from "./modules/getHabits/reducer";
import habitProgressReducer from "./modules/habitProgress/reducer";
import getGroupsReducer from "./modules/getGroups/reducer";
import goalProgressReducer from "./modules/goalProgress/reducer";
import getGoalsReducer from "./modules/getGoals/reducer";
import getActivitiesReducer from "./modules/getActivities/reducer";

const reducers = combineReducers({
  logged: IsLoggedReducer,
  haveGroup: HaveGroupReducer,
  getHabits: getHabitsReducer,
  habitProgress: habitProgressReducer,
  getGroups: getGroupsReducer,
  goalProgress: goalProgressReducer,
  getGoals: getGoalsReducer,
  getActivities: getActivitiesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
