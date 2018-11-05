import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "../css/App.css";

class Fade extends Component {
  state = {
    show: false
  };

  showDiv = () => {
    const { show } = this.state;
    this.setState((prevState, props) => ({
      show: !show
    }));
  };

  render() {
    const { show } = this.state;
    return (
      <CSSTransition in={show} timeout={2000} className="square">
        <div className={`square ${show}`}>CSS TRANSITIONS</div>
        <div className="showDiv" onClick={this.showDiv}>
          SHOW/HIDE
        </div>
      </CSSTransition>
    );
  }
}

export default Fade;
