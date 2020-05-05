import React from "react";
import NumberButton from "./NumberButton";
import "./App.css";

class App extends React.Component {
  state = {
      input: "",
  };
  operator = "";
  command = "";

  addToInput = num => {

      switch (num) {
          case "+":
              this.operator = "+"; this.command = "plus";
              break;
          case "-":
              this.operator = "-"; this.command = "minus";
              break;
          case "*":
              this.operator = "*"; this.command = "multiply";
              break;
          case "/":
              this.operator = "/"; this.command = "divide";
              break;
          case "^":
              this.operator = "^"; this.command = "power";
              break;
          case "%":
              this.operator = "%"; this.command = "modulo";
              break;
          case "C":
              this.setState({ input: "" });
              this.command = "";
              this.operator = "";
              return;
          case "=":
              const number = this.state.input.split(this.operator);
              fetch('http://localhost:8080/' + this.command + '/' + number[0] + '/' + number[1])
                  .then(res => res.json())
                  .then((data) => {
                      this.setState({ input: data })
                  })
                  .catch(console.log)
              break;
          default:
      }

      this.setState({ input: this.state.input + num });
  };

  createRow = arr =>
      arr.map((data, index) => (
          <NumberButton addToInput={this.addToInput} num={data} />
      ));

  render() {
    return (
        <div className="container">
          <div>
            <span>React Calculator</span>
          </div>
            <input className="display" value={this.state.input} />
            <div className="buttonWrap">{this.createRow([9, 8, 7, "*"])}</div>
            <div className="buttonWrap">{this.createRow([6, 5, 4, "+"])}</div>
            <div className="buttonWrap">{this.createRow([3, 2, 1, "-"])}</div>
            <div className="buttonWrap">{this.createRow([0, "%", "^", "/"])}</div>
            <div className="buttonWrap">
                <div className="doubleBtn">
                    <NumberButton addToInput={this.addToInput} num="C" />
                </div>
                <div className="doubleBtn">
                    <NumberButton addToInput={this.addToInput} num="=" />
                </div>
          </div>
        </div>
    );
  }
}

export default App;
