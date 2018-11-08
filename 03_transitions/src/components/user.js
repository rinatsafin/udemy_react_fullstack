import React, { Component } from "react";
import UserTemplate from "./user_template";

export default class User extends Component {
  state = {
    name: "Francis",
    lastName: "Jones",
    age: 25,
    spanish: false,
    hobbies: ["run", "walk", "bicycle", "watch movies"],
    car: {
      brand: "Ford",
      model: "Focus"
    },
    getName() {
      return this.name;
    },
    mother: "Martha",
    customValid: "success",
    color: "red"
  };
  changeColor() {
    // this.setState({
    //   color: "blue"
    // });
    this.refs.myColor.style.color = "blue";
  }
  render() {
    const style = {
      color: this.state.color
    };
    return (
      <div>
        <h4 style={style} ref="myColor">
          {this.state.mother}
        </h4>
        <div onClick={() => this.changeColor()}>Change color</div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}
