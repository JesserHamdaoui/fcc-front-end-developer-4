import React from "react";
import Display from "./calculator/Display";
import NumberButton from "./calculator/NumberButton";
import PointButton from "./calculator/PointButton";
import OperationButton from "./calculator/OperationButton";
import SubDisplay from "./calculator/SubDisplay";

const Calculator = () => {
  return (
    <div>
      <Display />
      <SubDisplay />
      <NumberButton value="0" />
      <NumberButton value="1" />
      <NumberButton value="2" />
      <NumberButton value="3" />
      <NumberButton value="4" />
      <NumberButton value="5" />
      <NumberButton value="6" />
      <NumberButton value="7" />
      <NumberButton value="8" />
      <NumberButton value="9" />
      <PointButton />
      <OperationButton opperator="+" />
      <OperationButton opperator="-" />
      <OperationButton opperator="*" />
      <OperationButton opperator="/" />
    </div>
  );
};

export default Calculator;
