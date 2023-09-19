import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsResult,
  updateDisplay,
} from "../../redux/display/displayActions";

const NumberButton = ({ id, value }) => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display.display);
  const isResult = useSelector((state) => state.display.isResult);

  const handleClick = () => {
    if (display === "0") {
      dispatch(updateDisplay(value));
    } else if (isResult) {
      dispatch(updateDisplay(value));
      dispatch(toggleIsResult());
    } else {
      dispatch(updateDisplay(display + value));
    }
  };

  return (
    <button id={id} value={value} onClick={handleClick}>
      {value}
    </button>
  );
};

export default NumberButton;
