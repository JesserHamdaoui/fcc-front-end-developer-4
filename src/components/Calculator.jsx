import React from "react";
import Display from "./calculator/Display";
import NumberButton from "./calculator/NumberButton";
import PointButton from "./calculator/PointButton";
import OperationButton from "./calculator/OperationButton";
import SubDisplay from "./calculator/SubDisplay";
import ACButton from "./calculator/ACButton";
import EqualButton from "./calculator/EqualButton";

const Calculator = () => {
  return (
    <div className="bg-slate-200 p-3 rounded-lg shadow-xl">
      <Display />
      <SubDisplay />
      <div className="grid grid-cols-4 gap-3">
        <ACButton />
        <OperationButton id="divide" opperator="/" />
        <OperationButton id="multiply" opperator="*" />
        <NumberButton id="seven" value="7" />
        <NumberButton id="eight" value="8" />
        <NumberButton id="nine" value="9" />
        <OperationButton id="subtract" opperator="-" />
        <NumberButton id="four" value="4" />
        <NumberButton id="five" value="5" />
        <NumberButton id="six" value="6" />
        <OperationButton id="add" opperator="+" />
        <NumberButton id="one" value="1" />
        <NumberButton id="two" value="2" />
        <NumberButton id="three" value="3" />
        <EqualButton />
        <NumberButton id="zero" value="0" zeroStyle="col-span-2 w-auto" />
        <PointButton />
      </div>
    </div>
  );
};

export default Calculator;
