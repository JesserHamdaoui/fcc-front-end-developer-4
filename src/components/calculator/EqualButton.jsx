import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsResult,
  updateDisplay,
} from "../../redux/display/displayActions";
import { updateSubDisplay } from "../../redux/sub-display/subDisplayActions";

const EqualButton = () => {
  const display = useSelector((state) => state.display.display);
  const subDisplay = useSelector((state) => state.subDisplay.display);
  const isResult = useSelector((state) => state.display.isResult);
  const dispatch = useDispatch();

  const handleClick = () => {
    let result = subDisplay;
    if (display !== "0") {
      result = result + display;
    }
    dispatch(updateDisplay(String(eval(result))));
    dispatch(updateSubDisplay(""));
    if (!isResult) dispatch(toggleIsResult());
  };

  return (
    <button
      id="equals"
      onClick={handleClick}
      className="w-10 h-auto bg-blue-900 flex justify-center items-center rounded-md font-bold text-white row-span-2"
    >
      {" "}
      ={" "}
    </button>
  );
};

export default EqualButton;
