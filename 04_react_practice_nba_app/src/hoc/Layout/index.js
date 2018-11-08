import React, { Component } from "react";
import "./layout.css";

// COMPONENTS
import Header from "../../components/Header";

export default class Layout extends Component {
  state = {
    header: "Header",
    footer: "Footer"
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        Footer
        <br />
      </div>
    );
  }
}
