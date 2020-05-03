import React from "react";
import NumberButton from "./NumberButton";
import "./App.css";

class App extends React.Component {
  state = {
    input: ""
  };

  addToInput = num => {
    console.log({ input: this.state.input + num });
    this.setState({ input: this.state.input + num });
  };

  calculateResult = () => {
    this.setState({ input: eval(this.state.input) });
  };

  createRow = arr =>
      arr.map((data, index) => (
          <NumberButton addToInput={this.addToInput} num={data} />
      ));

  render() {
    return (
        <div className="row-wrapper">
          <div className="name">
            <span>React Calculator</span>
          </div>

          <input className="display" value={this.state.input} />
          <div className="row">{this.createRow([9, 8, 7, "*"])}</div>
          <div className="row">{this.createRow([6, 5, 4, "+"])}</div>
          <div className="row">{this.createRow([3, 2, 1, "-"])}</div>
          <div className="row">{this.createRow([0, ".", "=", "/"])}</div>
        </div>
    );
  }
}

export default App;