import React from "react";
import { useSelector } from "react-redux";

const SubDisplay = () => {
  const display = useSelector((state) => state.subDisplay.display);

  return (
    <div className="w-auto h-10 bg-slate-950 flex justify-end items-center rounded-md font-bold text-yellow-400 p-3 mb-3">
      {display}
    </div>
  );
};

export default SubDisplay;
