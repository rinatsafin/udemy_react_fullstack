import React, { Component } from "react";
import axios from "axios";
//COMPONENTS
import SliderTemplates from "./SliderTemplates";
import { URL } from "../../../config";

export default class NewsSlider extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    const { endpoint, start, amount } = this.props;
    axios
      .get(`${URL}/articles?_start=${start}&_end=${amount}`)
      .then(response => {
        const { data: news } = response;
        this.setState({ news });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { news } = this.state;
    const { type, settings } = this.props;
    return (
      <div>
        <SliderTemplates data={news} type={type} settings={settings} />
      </div>
    );
  }
}
