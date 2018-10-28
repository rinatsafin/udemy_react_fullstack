import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "../css/App.css";

class TransitionComp extends Component {
  state = {
    show: true
  };

  timing = 2000;

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <Transition in={show} timeout={this.timing} mountOnEnter unmountOnExit>
          {state => (
            <div
              style={{
                backgroundColor: "#ec1561",
                height: "100px",
                transition: `all ${this.timing / 1000}s ease`,
                padding: "20px",
                margin: "10px",
                color: "#fff",
                fontSize: "30px",
                opacity: state === "entered" || state === "exiting" ? 0 : 1
              }}
            >
              {state}
            </div>
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
