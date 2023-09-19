import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsResult,
  updateDisplay,
} from "../../redux/display/displayActions";

const PointButton = () => {
  const display = useSelector((state) => state.display.display);
  const isResult = useSelector((state) => state.display.isResult);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (display.indexOf(".") === -1) {
      dispatch(updateDisplay(display + "."));
    } else if (isResult) {
      dispatch(updateDisplay("."));
      dispatch(toggleIsResult());
    }
  };

  return (
    <button id="decimal" onClick={handleClick}>
      .
    </button>
  );
};

export default PointButton;
