import React, { Component } from "react";
import axios from "axios";
//COMPONENTS
import SliderTemplates from "./SliderTemplates";

export default class NewsSlider extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3004/articles?_start=0&_end=3`)
      .then(response => {
        const { data: news } = response;
        this.setState({ news });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { news, } = this.state;
    return (
      <div>
        <SliderTemplates data={news} type="featured" />
      </div>
    );
  }
}
