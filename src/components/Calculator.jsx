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
    <div>
      <Display />
      <SubDisplay />
      <NumberButton id="zero" value="0" />
      <NumberButton id="one" value="1" />
      <NumberButton id="two" value="2" />
      <NumberButton id="three" value="3" />
      <NumberButton id="four" value="4" />
      <NumberButton id="five" value="5" />
      <NumberButton id="six" value="6" />
      <NumberButton id="seven" value="7" />
      <NumberButton id="eight" value="8" />
      <NumberButton id="nine" value="9" />
      <PointButton />
      <OperationButton id="add" opperator="+" />
      <OperationButton id="subtract" opperator="-" />
      <OperationButton id="multiply" opperator="*" />
      <OperationButton id="divide" opperator="/" />
      <ACButton />
      <EqualButton />
    </div>
  );
};

export default Calculator;
