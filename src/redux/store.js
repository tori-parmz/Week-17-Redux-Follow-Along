import { legacy_createStore } from "redux";
import reducer from "./reducers/counter-reducer";

export const store = legacy_createStore(reducer);

