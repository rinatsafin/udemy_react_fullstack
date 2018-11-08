import React, { Component } from "react";
import "./layout.css";

// COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class Layout extends Component {
  state = {
    showNav: false
  };
  toggleSideNav = action => {
    this.setState({ showNav: action });
  };
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onOpenNav={() => this.toggleSideNav(true)}
        />
        {children}
        <Footer></Footer>
      </div>
    );
  }
}
