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
    <button
      id="decimal"
      onClick={handleClick}
      className="w-10 h-10 bg-slate-400 flex justify-center items-center rounded-md font-bold text-white"
    >
      .
    </button>
  );
};

export default PointButton;
