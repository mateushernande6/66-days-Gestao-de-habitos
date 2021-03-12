import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import IsLoggedReducer from "./modules/isLogged/reducer";
import HaveGroupReducer from "./modules/haveGroup/reducer";

const reducers = combineReducers({
  logged: IsLoggedReducer,
  haveGroup: HaveGroupReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
