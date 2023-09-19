import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplay } from "../../redux/display/displayActions";

const NumberButton = ({ value }) => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display.display);

  const handleClick = () => {
    if (display === "0") {
      dispatch(updateDisplay(value));
    } else {
      dispatch(updateDisplay(display + value));
    }
  };

  return <div onClick={handleClick}>{value}</div>;
};

export default NumberButton;
