import { combineReducers, createStore } from "redux";
import { displayReducer } from "./display/displayReducer";
import { subDisplayReducer } from "./sub-display/subDisplayReducer";

export const store = createStore(
  combineReducers({
    display: displayReducer,
    subDisplay: subDisplayReducer,
  })
);
