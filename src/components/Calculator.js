import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <div className="display">0</div>
        <div className="row">
          <button type="button" className="btn 1">AC</button>
          <button type="button" className="btn 1">+/-</button>
          <button type="button" className="btn 1">%</button>
          <button type="button" className="btn ora">÷</button>
        </div>
        <div className="row">
          <button type="button" className="btn 7">7</button>
          <button type="button" className="btn 8">8</button>
          <button type="button" className="btn 9">9</button>
          <button type="button" className="btn ora">x</button>
        </div>
        <div className="row">
          <button type="button" className="btn 4">4</button>
          <button type="button" className="btn 5">5</button>
          <button type="button" className="btn 6">6</button>
          <button type="button" className="btn ora">-</button>
        </div>
        <div className="row">
          <button type="button" className="btn 1">1</button>
          <button type="button" className="btn 2">2</button>
          <button type="button" className="btn 3">3</button>
          <button type="button" className="btn ora">+</button>
        </div>
        <div className="last-row">
          <button type="button" className="btn 0">0</button>
          <button type="button" className="btn .">.</button>
          <button type="button" className="btn ora">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
