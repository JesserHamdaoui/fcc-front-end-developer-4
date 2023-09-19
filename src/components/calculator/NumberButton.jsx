import React from "react";
import { useDispatch } from "react-redux";
import { updateDisplay } from "../../redux/display/displayActions";

const NumberButton = ({ value }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateDisplay(value));
  };

  return <div onClick={handleClick}>{value}</div>;
};

export default NumberButton;
