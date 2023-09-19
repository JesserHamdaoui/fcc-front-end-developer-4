import { TOGGLE_IS_RESULT, UPDATE_DISPLAY } from "./displayTypes";

export const updateDisplay = (text) => {
  return {
    type: UPDATE_DISPLAY,
    text,
  };
};

export const toggleIsResult = () => {
  return {
    type: TOGGLE_IS_RESULT,
  };
};
