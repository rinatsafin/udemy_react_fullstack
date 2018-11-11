import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
//CONFIG
import { URL } from "../../../config";
import styles from "../NewsList/news_list.css";

export default class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentDidMount() {
    const { start, end } = this.state;
    this.request(start, end);
  }

  request = (start, end) => {
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      const { data } = response;
      const { items } = this.state;
      this.setState({ items: [...items, ...data] });
    });
  };

  loadMore = () => {
    const { end, amount } = this.state;
    const nextEnd = end + amount;
    this.request(end, nextEnd);
  };

  renderNews = type => {
    let template;
    switch (type) {
      case "card":
        template = this.state.items.map(item => (
          <div key={item.id}>
            <div className={styles.newslist_item}>
              <Link to={`/articles/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
          </div>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    const { type } = this.props;
    return <div>
        {this.renderNews(type)}
        <div className={styles.loadmore} onClick={this.loadMore}>
          Loadmore
        </div>
      </div>;
  }
}
