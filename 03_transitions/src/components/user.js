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
    mother: "Martha"
  };
  render() {
    return (
      <div>
        <UserTemplate {...this.state} />
      </div>
    );
  }
}
