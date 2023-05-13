import { legacy_createStore } from "redux";
import rootReducer from "./reducers/";


//use combineReducers function to use multiple reducers
export const store = legacy_createStore(rootReducer);

