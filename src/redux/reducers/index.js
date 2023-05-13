import { combineReducers } from "redux";
import counterReducer from "./counter-reducer"
import dosCounterReducer from "./dosCounter"

export default combineReducers({
    counter: counterReducer,
    dosCounter: dosCounterReducer
});

//combines them because store can only take one argument

//two different reducers => two different states maintined
//in this application