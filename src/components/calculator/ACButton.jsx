import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsResult,
  updateDisplay,
} from "../../redux/display/displayActions";
import { updateSubDisplay } from "../../redux/sub-display/subDisplayActions";

const ACButton = () => {
  const dispatch = useDispatch();
  const isResult = useSelector((state) => state.display.isResult);
  const handleClick = () => {
    if (isResult) {
      dispatch(toggleIsResult());
    }
    dispatch(updateDisplay("0"));
    dispatch(updateSubDisplay(""));
  };

  return (
    <button
      id="clear"
      onClick={handleClick}
      className="w-auto h-10 bg-red-400 flex justify-center items-center rounded-md font-bold text-white col-span-2"
    >
      AC
    </button>
  );
};

export default ACButton;
