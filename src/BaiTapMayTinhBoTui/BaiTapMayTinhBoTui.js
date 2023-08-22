import React, { Component } from 'react';

export default class BaiTapMayTinhBoTui extends Component {

  calculator = (value) => {
    const element = document.querySelector('#screen');
    element.setAttribute('placeholder', value);
  }

  render() {
    const mystyle = {
      border: "1px solid #A9A9A9",
      cursor: 'pointer',
    };

    return (
      <div className='container-fluid' style={{ width: '40%' }}>
        <div className="card text-left" style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
          <h5 className='card-header'>
            <input id='screen' className='text-right w-100' placeholder='0' disabled></input>
          </h5>
          <table className="table text-center m-0">
            <tbody>
              <tr>
                <td onClick={() => { this.calculator('7') }} style={mystyle}>7</td>
                <td onClick={() => { this.calculator('8') }} style={mystyle}>8</td>
                <td onClick={() => { this.calculator('9') }} style={mystyle}>9</td>
                <td onClick={() => { this.calculator('/') }} style={mystyle}>/</td>
                <td onClick={() => { this.calculator('CE') }} style={mystyle}>CE</td>
              </tr>
              <tr>
                <td onClick={() => { this.calculator('4') }} style={mystyle}>4</td>
                <td onClick={() => { this.calculator('5') }} style={mystyle}>5</td>
                <td onClick={() => { this.calculator('6') }} style={mystyle}>6</td>
                <td onClick={() => { this.calculator('*') }} style={mystyle}>*</td>
                <td onClick={() => { this.calculator('C') }} style={mystyle}>C</td>
              </tr>
              <tr>
                <td onClick={() => { this.calculator('1') }} style={mystyle}>1</td>
                <td onClick={() => { this.calculator('2') }} style={mystyle}>2</td>
                <td onClick={() => { this.calculator('3') }} style={mystyle}>3</td>
                <td onClick={() => { this.calculator('-') }} style={mystyle}>-</td>
                <td onClick={() => { this.calculator('=') }} style={mystyle} rowSpan={2}>=</td>
              </tr>
              <tr>
                <td onClick={() => { this.calculator('0') }} style={mystyle} colSpan={2}>0</td>
                <td onClick={() => { this.calculator('1') }} style={mystyle}>1</td>
                <td onClick={() => { this.calculator('+') }} style={mystyle}>+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
