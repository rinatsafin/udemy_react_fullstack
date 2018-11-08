import React, { Component } from "react";
import "./layout.css";

export default class Layout extends Component {
  state = {
    header: "Header",
    footer: "Footer"
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        Header
        <br />
        {children}
        Footer
        <br />
      </div>
    );
  }
}
