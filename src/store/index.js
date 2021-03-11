import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import IsLoggedReducer from "./modules/isLogged/reducer";

const reducers = combineReducers({ logged: IsLoggedReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
