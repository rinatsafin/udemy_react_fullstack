import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  state = {
    pureState: "defaultPure"
  };
  render() {
    const { pureState } = this.state;
    console.log("RENDER");
    return (
      <div>
        <h3>{pureState}</h3>
        <div onClick={() => this.setState({ pureState: "nextPureState" })}>
          CLICK TO CHANGE
        </div>
      </div>
    );
  }
}
