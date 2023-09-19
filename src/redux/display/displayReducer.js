import { TOGGLE_IS_RESULT, UPDATE_DISPLAY } from "./displayTypes";

const initialDisplayState = {
  display: "0",
  isResult: false,
};

export const displayReducer = (state = initialDisplayState, action) => {
  switch (action.type) {
    case UPDATE_DISPLAY:
      return { ...state, display: action.text };
    case TOGGLE_IS_RESULT:
      return { ...state, isResult: !state.isResult };
    default:
      return state;
  }
};
