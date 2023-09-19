import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplay } from "../../redux/display/displayActions";
import { updateSubDisplay } from "../../redux/sub-display/subDisplayActions";

const EqualButton = () => {
  const display = useSelector((state) => state.display.display);
  const subDisplay = useSelector((state) => state.subDisplay.display);
  const dispatch = useDispatch();

  const handleClick = () => {
    let result = subDisplay;
    if (display !== "0") {
      result = result + display;
    }
    dispatch(updateDisplay(String(eval(subDisplay + display))));
    dispatch(updateSubDisplay(""));
  };

  return <div onClick={handleClick}> = </div>;
};

export default EqualButton;
