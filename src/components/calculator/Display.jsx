import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const display = useSelector((state) => state.display.display);

  return (
    <div
      id="display"
      className="w-auto h-10 bg-slate-950 flex justify-end items-center rounded-md font-bold text-white p-3 mb-1"
    >
      {display}
    </div>
  );
};

export default Display;
