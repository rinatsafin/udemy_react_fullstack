import React, { Component } from "react";

export default class Conditional extends Component {
  getValue = () => {
    // some logic
    return true;
  };

  showIt = () => {
    return this.getValue() ? (
      <div>Hello, it's true</div>
    ) : (
      <div>Hello it's false</div>
    );
  };

  render() {
    return <div>{this.showIt()}</div>;
  }
}
