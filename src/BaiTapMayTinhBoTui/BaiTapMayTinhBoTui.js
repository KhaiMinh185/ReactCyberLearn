import React, { Component } from 'react';

export default class BaiTapMayTinhBoTui extends Component {

  state = {
    result: "",
  };

  dis = (e) => {
    // let number = parseInt(e.target.innerText, 10);
    let number = e.target.innerText;

    this.setState({
      result: this.state.result + number,
    });

  };

  clear = () => {
    this.setState({
      result: "",
    });
  };

  calculator = () => {
    try {
      this.setState({
        result: eval(this.state.result.toString()),
      });
    } catch (error) {
      this.setState({
        result: "error",
      });
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
            <input id='screen' className='text-right w-100' value={this.state.result}></input>
          </h5>
          <table className="table text-center m-0">
            <tbody>
              <tr>
                <td name="7" onClick={this.dis} style={mystyle}>7</td>
                <td name="8" onClick={this.dis} style={mystyle}>8</td>
                <td name="9" onClick={this.dis} style={mystyle}>9</td>
                <td name="/" onClick={this.dis} style={mystyle}>&divide;</td>
                <td name="C" onClick={this.dis} style={mystyle}>CE</td>
              </tr>
              <tr>
                <td name="4" onClick={this.dis} style={mystyle}>4</td>
                <td name="5" onClick={this.dis} style={mystyle}>5</td>
                <td name="6" onClick={this.dis} style={mystyle}>6</td>
                <td name="*" onClick={this.dis} style={mystyle}>&times;</td>
                <td name="C" onClick={this.clear} style={mystyle}>C</td>
              </tr>
              <tr>
                <td name="1" onClick={this.dis} style={mystyle}>1</td>
                <td name="2" onClick={this.dis} style={mystyle}>2</td>
                <td name="3" onClick={this.dis} style={mystyle}>3</td>
                <td name="-" onClick={this.dis} style={mystyle}>&ndash;</td>
                <td name="=" onClick={this.calculator} style={mystyle} rowSpan={2}>=</td>
              </tr>
              <tr>
                <td name="0" onClick={this.dis} style={mystyle} colSpan={2}>0</td>
                <td name="1" onClick={this.dis} style={mystyle}>1</td>
                <td name="+" onClick={this.dis} style={mystyle}>+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
