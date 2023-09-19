import React from "react";
import { useSelector } from "react-redux";

const SubDisplay = () => {
  const display = useSelector((state) => state.subDisplay.display);

  return <div>{display}</div>;
};

export default SubDisplay;
