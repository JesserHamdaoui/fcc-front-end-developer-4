import React from "react";
import Display from "./calculator/Display";
import NumberButton from "./calculator/NumberButton";
import PointButton from "./calculator/PointButton";

const Calculator = () => {
  return (
    <div>
      <Display />
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
    </div>
  );
};

export default Calculator;
