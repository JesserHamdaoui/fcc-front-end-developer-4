import { applyMiddleware, combineReducers, createStore } from "redux";
import { displayReducer } from "./display/displayReducer";
import { subDisplayReducer } from "./sub-display/subDisplayReducer";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({
    display: displayReducer,
    subDisplay: subDisplayReducer,
  }),
  applyMiddleware(thunk)
);
