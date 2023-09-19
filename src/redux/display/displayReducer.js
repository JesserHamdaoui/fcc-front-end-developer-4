import { UPDATE_DISPLAY } from "./displayTypes";

const initialDisplayState = {
  display: "0",
};

export const displayReducer = (state = initialDisplayState, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY:
      return { ...state, display: action.text };
    default:
      return state;
  }
};
