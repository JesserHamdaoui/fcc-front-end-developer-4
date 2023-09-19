import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplay } from "../../redux/display/displayActions";
import { updateSubDisplay } from "../../redux/sub-display/subDisplayActions";

const OperationButton = ({ id, opperator }) => {
  const display = useSelector((state) => state.display.display);
  const subDisplay = useSelector((state) => state.subDisplay.display);
  const dispatch = useDispatch();

  const handleClick = () => {
    // if (subDisplay[-2] in ["+", "-", "*", "/"]) return;
    if (display === "0" && opperator === "-") dispatch(updateDisplay("-"));
    else {
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
