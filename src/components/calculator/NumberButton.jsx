import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsResult,
  updateDisplay,
} from "../../redux/display/displayActions";

const NumberButton = ({ id, value, zeroStyle }) => {
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
    <button
      id={id}
      value={value}
      onClick={handleClick}
      className={`w-10 h-10 bg-slate-400 flex justify-center items-center rounded-md font-bold text-white ${zeroStyle}`}
    >
      {value}
    </button>
  );
};

export default NumberButton;
