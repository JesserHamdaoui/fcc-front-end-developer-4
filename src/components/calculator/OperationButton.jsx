import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsResult,
  updateDisplay,
} from "../../redux/display/displayActions";
import { updateSubDisplay } from "../../redux/sub-display/subDisplayActions";

const OperationButton = ({ id, opperator }) => {
  const display = useSelector((state) => state.display.display);
  const subDisplay = useSelector((state) => state.subDisplay.display);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (opperator === "-" && display === "0") {
      dispatch(updateSubDisplay(subDisplay + " " + opperator + " "));
      dispatch(updateDisplay("0"));
    } else if (
      (subDisplay.charAt(subDisplay.length - 2) === "*" ||
        subDisplay.charAt(subDisplay.length - 2) === "+" ||
        subDisplay.charAt(subDisplay.length - 2) === "-" ||
        subDisplay.charAt(subDisplay.length - 2) === "/") &&
      display === "0"
    ) {
      let i = 0;
      while (
        !(
          subDisplay.charAt(subDisplay.length - i) <= "9" &&
          subDisplay.charAt(subDisplay.length - i) >= "0"
        )
      ) {
        i++;
      }
      dispatch(
        updateSubDisplay(
          subDisplay.substring(0, subDisplay.length - i + 2) + opperator + " "
        )
      );
    } else {
      dispatch(updateSubDisplay(subDisplay + display + " " + opperator + " "));
      dispatch(updateDisplay("0"));
    }
  };

  return (
    <button id={id} value={opperator} onClick={handleClick}>
      {opperator}
    </button>
  );
};

export default OperationButton;
