import { UPDATE_SUB_DISPLAY } from "./subDisplayTypes";

export const updateSubDisplay = (text) => {
  return {
    type: UPDATE_SUB_DISPLAY,
    text,
  };
};
