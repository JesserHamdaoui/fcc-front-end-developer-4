import React from "react";
import { useDispatch } from "react-redux";
import { updateDisplay } from "../../redux/display/displayActions";
import { updateSubDisplay } from "../../redux/sub-display/subDisplayActions";

const ACButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateDisplay("0"));
    dispatch(updateSubDisplay(""));
  };

  return (
    <button id="clear" onClick={handleClick}>
      AC
    </button>
  );
};

export default ACButton;
