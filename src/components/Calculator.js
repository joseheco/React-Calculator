import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.valueOperation = this.valueOperation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const btnVal = btnName.target.textContent;
    this.setState((e) => calculate(e, btnVal));
  }

  valueOperation() {
    const { total, next, operation } = this.state;
    if (total === null && next === null && operation === null) return 0;
    const result = `${total || ''} ${operation || ''} ${next || ''}`;
    return result;
  }

  render() {
    return (
      <div className="main">
        <div className="display">
          { this.valueOperation() }
        </div>
        <div className="row">
          <button type="button" className="btn 1" onClick={this.handleClick}>AC</button>
          <button type="button" className="btn 1" onClick={this.handleClick}>+/-</button>
          <button type="button" className="btn 1" onClick={this.handleClick}>%</button>
          <button type="button" className="btn ora" onClick={this.handleClick}>÷</button>
        </div>
        <div className="row">
          <button type="button" className="btn 7" onClick={this.handleClick}>7</button>
          <button type="button" className="btn 8" onClick={this.handleClick}>8</button>
          <button type="button" className="btn 9" onClick={this.handleClick}>9</button>
          <button type="button" className="btn ora" onClick={this.handleClick}>x</button>
        </div>
        <div className="row">
          <button type="button" className="btn 4" onClick={this.handleClick}>4</button>
          <button type="button" className="btn 5" onClick={this.handleClick}>5</button>
          <button type="button" className="btn 6" onClick={this.handleClick}>6</button>
          <button type="button" className="btn ora" onClick={this.handleClick}>-</button>
        </div>
        <div className="row">
          <button type="button" className="btn 1" onClick={this.handleClick}>1</button>
          <button type="button" className="btn 2" onClick={this.handleClick}>2</button>
          <button type="button" className="btn 3" onClick={this.handleClick}>3</button>
          <button type="button" className="btn ora" onClick={this.handleClick}>+</button>
        </div>
        <div className="last-row">
          <button type="button" className="btn 0" onClick={this.handleClick}>0</button>
          <button type="button" className="btn ." onClick={this.handleClick}>.</button>
          <button type="button" className="btn ora" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
