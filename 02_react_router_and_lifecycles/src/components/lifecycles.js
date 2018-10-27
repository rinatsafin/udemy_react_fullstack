import React, { Component } from "react";

export default class Lifecycles extends Component {
  state = { title: "Lifecycles" };

  componentWillMount() {
    console.log("componentWillMount -> step: 3 before render");
  }

  componentDidMount() {
    console.log("componentDidMount -> step: 5 after render");
    document.querySelector("h3").style.color = "red";
  }

  componentWillUpdate() {
    console.log("componentWilUpdate BEFORE UPDATE");
  }

  componentDidUpdate(prevProps, prevState, shnapshot) {
    console.log("componentDidUpdate AFTER UPDATE");
    // console.log("prevProps :", prevProps);
    // console.log("prevState :", prevState);
    // console.log("shnapshot :", shnapshot);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate step: 7 befor render");
    // console.log("nextProps :", nextProps);
    // console.log("nextState :", nextState);
    console.log(
      "nextState.title !== this.state.title -> render()",
      nextState.title !== this.state.title
    );
    // return nextState.title !== this.state.title;
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log("UNSAFE_componentWillReceiveProps => getDerivedStateFromProps");
    console.log("nextProps :", nextProps);
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   console.log("props :", props);
  //   console.log("state :", state);
  // }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  //   console.log("prevProps :", prevProps);
  //   console.log("prevState :", prevState);
  // }

  render() {
    console.log("RENDER ->>>");
    const { title } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <div onClick={() => this.setState({ title: "something else" })}>
          CLICK TO CHANGE TITLE
        </div>
        <ol>
          <li>get default props</li>
          <li>get default state //st</li>
          <li>componetWillMount</li>
          <li>render JSX</li>
          <li>componentDidMount</li>
          <li>setState or reciveProps</li>
          <li>shouldComponentUpdate if shouldComponentUpdate => true</li>
          <li>componentWilUpdate</li>
          <li>render</li>
          <li>componentDidUpdate</li>
          <li>next-> componentWillReceiveProps</li>
          <li>shouldComponentUpdate > true > render</li>
          <li>componentWilUpdate</li>
          <li>render</li>
          <li>componentDidUpdate</li>
          <li>componentWillUnmount</li>
        </ol>
      </div>
    );
  }
}
