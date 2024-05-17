import React, { useState } from "react";

interface CalculatorProps {
  display: string;
  result: string;
  onButtonClick: (value: string) => void;
}

const Calculator = ({ display, result, onButtonClick }: CalculatorProps) => {
  const isNumber = (value: string) => /[0-9.]/.test(value);
  return (
    <div className="calculator container-sm mb-3 border border-warning p-3 bg-primary-subtle">
      <div className="mb-3 row">
        <div className="col-12 mb-2">
          <div className="display card">
            <div className="card-title">{display}</div>
            <div className="card-text result">{result}</div>
          </div>
        </div>
      </div>
      <div className="row">
        {[
          "C",
          "/",
          "*",
          "7",
          "8",
          "9",

          "4",
          "5",
          "6",

          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "+",
          "=",
        ].map((btn) => (
          <div className="col-4 mb-2" key={btn}>
            <button
              className={`btn w-100 ${
                isNumber(btn)
                  ? "btn-primary rounded-pill"
                  : "btn-secondary rounded-pill"
              }`}
              onClick={() => onButtonClick(btn)}>
              {btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
