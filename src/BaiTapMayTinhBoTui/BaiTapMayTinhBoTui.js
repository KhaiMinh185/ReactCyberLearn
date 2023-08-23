import React, { Component } from 'react';

export default class BaiTapMayTinhBoTui extends Component {

  state = {
    num1: '',
    num2: '',
    operator: '',
  };

  dis = (val) => {
    let resultInput = document.querySelector('#screen');
    console.log(val);

    if (isNaN(val)) {
      if (val === 'C') {
        this.setState({
          num1: '',
          num2: '',
          operator: 'undefined',
        });
        resultInput.value = '';
        return;
      }
      if (val === '=') {
        const result = this.perform(this.state.num1, this.state.num2, this.state.operator);
        // resultInput.value = '';
        resultInput.value = result;
        console.log(result);
        this.setState({
          num1: '',
          num2: '',
          operator: 'undefined',
        });
      } else {
        this.setState({
          operator: val,
        });
      }
    } else {
      if (this.state.operator) {
        this.setState({
          num1: resultInput.value += val,
        });
      } else {
        this.setState({
          num2: resultInput.value += val,
        });
      }
    }
  }

  perform = (num1, num2, operator) => {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Division by zero";
        } else {
          return num1 / num2;
        }
      default:
        return;
    }
  };

  render() {
    const mystyle = {
      border: "1px solid #A9A9A9",
      cursor: 'pointer',
    };

    return (
      <div className='container-fluid' style={{ width: '40%' }}>
        <div className="card text-left" style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
          <h5 className='card-header'>
            <input id='screen' className='text-right w-100'></input>
          </h5>
          <table className="table text-center m-0">
            <tbody>
              <tr>
                <td value='7' onClick={() => { this.dis('7') }} style={mystyle}>7</td>
                <td value='8' onClick={() => { this.dis('8') }} style={mystyle}>8</td>
                <td value='9' onClick={() => { this.dis('9') }} style={mystyle}>9</td>
                <td value='/' onClick={() => { this.dis('/') }} style={mystyle}>/</td>
                <td value='CE' onClick={() => { this.dis('CE') }} style={mystyle}>CE</td>
              </tr>
              <tr>
                <td value='4' onClick={() => { this.dis('4') }} style={mystyle}>4</td>
                <td value='5' onClick={() => { this.dis('5') }} style={mystyle}>5</td>
                <td value='6' onClick={() => { this.dis('6') }} style={mystyle}>6</td>
                <td value='*' onClick={() => { this.dis('*') }} style={mystyle}>*</td>
                <td value='C' onClick={() => { this.dis('C') }} style={mystyle}>C</td>
              </tr>
              <tr>
                <td value='1' onClick={() => { this.dis('1') }} style={mystyle}>1</td>
                <td value='2' onClick={() => { this.dis('2') }} style={mystyle}>2</td>
                <td value='3' onClick={() => { this.dis('3') }} style={mystyle}>3</td>
                <td value='-' onClick={() => { this.dis('-') }} style={mystyle}>-</td>
                <td value='=' onClick={() => { this.dis('=') }} style={mystyle} rowSpan={2}>=</td>
              </tr>
              <tr>
                <td value='0' onClick={() => { this.dis('0') }} style={mystyle} colSpan={2}>0</td>
                <td value='1' onClick={() => { this.dis('1') }} style={mystyle}>1</td>
                <td value='+' onClick={() => { this.dis('+') }} style={mystyle}>+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
