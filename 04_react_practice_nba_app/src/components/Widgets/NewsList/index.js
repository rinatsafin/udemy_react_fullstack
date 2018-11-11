import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
//CONFIG
import { URL } from "../../../config";
// COMPONENT
import Button from "../Button";
// STYLES
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
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newslist_wrapper,
              enterActive: styles.newslist_wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <div key={i}>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                  Teams
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };

  render() {
    const { type } = this.props;
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={this.loadMore}
          cta="Load More News"
        />
      </div>
    );
  }
}