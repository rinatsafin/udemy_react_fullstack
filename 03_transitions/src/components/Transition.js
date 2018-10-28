import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "../css/App.css";

class TransitionComp extends Component {
  state = {
    show: false
  };

  timing = {
    enter: 2000,
    exit: 2000
  };

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <Transition
          in={show}
          timeout={this.timing}
          enter={true}
          exit={true}
          onEnter={node => {
            console.log("ENTER");
            console.log(node);
          }}
          onExit={node => {
            console.log("EXIT");
            console.log(node);
          }}
        >
          {state => (
            <div
              className={`square square-${state}`}
            >{`square square-${state}`}</div>
          )}
        </Transition>
        <div onClick={this.toggleDiv} className="showDiv">
          SHOW / HIDE
        </div>
      </div>
    );
  }
}

export default TransitionComp;
