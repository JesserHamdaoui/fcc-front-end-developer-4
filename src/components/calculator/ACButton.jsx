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

  return <div onClick={handleClick}>AC</div>;
};

export default ACButton;
