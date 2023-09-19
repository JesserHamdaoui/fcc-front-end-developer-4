import { UPDATE_DISPLAY } from "./displayTypes";

export const updateDisplay = (text) => {
  return {
    type: UPDATE_DISPLAY,
    text,
  };
};
