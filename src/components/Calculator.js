import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const objCal = {
    total: null,
    next: null,
    operation: null,
  };

  const [objVal, setObjVal] = useState(objCal);

  const handleClick = (btnName) => {
    const btnVal = btnName.target.textContent;
    setObjVal(calculate(objVal, btnVal));
  };

  const valueOperation = ({ total, next, operation }) => {
    if (total === null && next === null && operation === null) return 0;
    const result = `${total || ''} ${operation || ''} ${next || ''}`;
    return result;
  };

  return (
    <div className="main">
      <div className="display">
        { valueOperation(objVal) }
      </div>
      <div className="row">
        <button type="button" className="btn 1" onClick={handleClick}>AC</button>
        <button type="button" className="btn 1" onClick={handleClick}>+/-</button>
        <button type="button" className="btn 1" onClick={handleClick}>%</button>
        <button type="button" className="btn ora" onClick={handleClick}>÷</button>
      </div>
      <div className="row">
        <button type="button" className="btn 7" onClick={handleClick}>7</button>
        <button type="button" className="btn 8" onClick={handleClick}>8</button>
        <button type="button" className="btn 9" onClick={handleClick}>9</button>
        <button type="button" className="btn ora" onClick={handleClick}>x</button>
      </div>
      <div className="row">
        <button type="button" className="btn 4" onClick={handleClick}>4</button>
        <button type="button" className="btn 5" onClick={handleClick}>5</button>
        <button type="button" className="btn 6" onClick={handleClick}>6</button>
        <button type="button" className="btn ora" onClick={handleClick}>-</button>
      </div>
      <div className="row">
        <button type="button" className="btn 1" onClick={handleClick}>1</button>
        <button type="button" className="btn 2" onClick={handleClick}>2</button>
        <button type="button" className="btn 3" onClick={handleClick}>3</button>
        <button type="button" className="btn ora" onClick={handleClick}>+</button>
      </div>
      <div className="last-row">
        <button type="button" className="btn 0" onClick={handleClick}>0</button>
        <button type="button" className="btn ." onClick={handleClick}>.</button>
        <button type="button" className="btn ora" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
