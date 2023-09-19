import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplay } from "../../redux/display/displayActions";

const PointButton = () => {
  const display = useSelector((state) => state.display.display);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (display.indexOf(".") === -1) {
      dispatch(updateDisplay(display + "."));
    }
  };

  return <div onClick={handleClick}>.</div>;
};

export default PointButton;
