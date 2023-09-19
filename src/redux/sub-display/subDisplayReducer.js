import { UPDATE_SUB_DISPLAY } from "./subDisplayTypes";

const initialSubDisplayState = {
  display: "",
};

export const subDisplayReducer = (state = initialSubDisplayState, action) => {
  switch (action.type) {
    case UPDATE_SUB_DISPLAY:
      return { ...state, display: action.text };
    default:
      return state;
  }
};
