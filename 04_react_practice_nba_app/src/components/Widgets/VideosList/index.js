import React, { Component } from "react";
import axios from "axios";
import styles from "./videosList.css";
import { URL } from "../../../config";

import Button from "../Button";
import VideosListTemplate from "./VideosListTemplate";

export default class VideosList extends Component {
  constructor(props) {
    super(props);
    const { start, amount } = props;
    this.state = {
      teams: [],
      title: false,
      videos: [],
      start: start || 0,
      end: start + amount,
      amount: amount || 0
    };
  }
  componentDidMount() {
    const { start, end } = this.state;
    this.request(start, end);
  }
  request = (start, end) => {
    const { teams } = this.state;
    if (teams.length < 1) {
      // axios
      //   .get(`${URL}/teams`)
      //   .then(response => this.setState({ teams: response.data }));
      axios.get(`${URL}/teams`).then(response =>
        this.setState((prevState, { teams = response.data }) => {
          return { ...prevState, teams };
        })
      );
    }
    // axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response =>
    //   this.setState({
    //     videos: response.data
    //   })
    // );
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response =>
      this.setState((prevState, { videos = response.data }) => {
        const { videos: oldVideosList } = prevState;
        return { ...prevState, videos: [...oldVideosList, ...videos] };
      })
    );
  };
  renderVideos = () => {
    let template = null;
    const { type } = this.props;
    const { teams, videos } = this.state;
    switch (type) {
      case "card": {
        template = <VideosListTemplate data={videos} teams={teams} />;
        break;
      }
      default: {
        template = null;
      }
    }
    return template;
  };
  loadMoreVideos = () => {
    return "";
  };
  renderTitle = () => {
    return (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    );
  };
  renderButton = loadMore =>
    loadMore ? (
      <Button
        type="loadMore"
        loadmore={() => this.loadMoreVideos()}
        cta="Load More Videos"
      />
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="" />
    );
  render() {
    const { title, loadMore } = this.props;
    const { teams } = this.state;
    return (
      teams.length && (
        <div className={styles.videoList_wrapper}>
          {title && this.renderTitle()}
          {this.renderVideos()}
          {this.renderButton(loadMore)}
        </div>
      )
    );
  }
}
