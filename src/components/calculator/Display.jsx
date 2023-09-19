import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const display = useSelector((state) => state.display.display);

  return <div>{display}</div>;
};

export default Display;
