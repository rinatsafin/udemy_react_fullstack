import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../css/App.css";

class Slide extends Component {
  state = {
    items: []
  };

  addElements() {
    const { items } = this.state;
    return items.map((item, i) => (
      <CSSTransition
        classNames="item"
        timeout={500}
        key={i}
        onEntered={node => {
          node.classList.add("active");
        }}
      >
        <div className="item" key={i}>
          {item}
        </div>
      </CSSTransition>
    ));
  }

  generateNumber() {
    const random = Math.floor(Math.random() * 100) + 1;
    const { items: elements } = this.state;
    const items = [...elements, random];
    this.setState({ items });
  }

  removeNumber() {
    const { items: elements } = this.state;
    const items = elements.slice(0, -1);
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.addElements()}
        </TransitionGroup>
        <div className="btns">
          <div className="btn-add" onClick={() => this.generateNumber()}>
            Add Elements
          </div>
          <div className="btn-remove" onClick={() => this.removeNumber()}>
            Remove Elements
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
