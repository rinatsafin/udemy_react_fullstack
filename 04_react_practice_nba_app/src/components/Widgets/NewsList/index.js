import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
//CONFIG
import { URL } from "../../../config";
// COMPONENT
import Button from "../Button";
import CardInfo from "../CardInfo";
// STYLES
import styles from "../NewsList/news_list.css";

export default class NewsList extends Component {
  constructor({ start, amount }) {
    super({ start, amount });
    this.state = { teams: [], items: [], start, end: start + amount, amount };
  }
  componentDidMount() {
    const { start, end } = this.state;
    this.request(start, end);
  }

  request = (start, end) => {
    const { items, teams } = this.state;
    if (teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({ teams: response.data });
      });
    }
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      const { data } = response;
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
    const { teams } = this.state;
    switch (type) {
      case "card":
        template = this.state.items.map(({ team, title, date, id }, idx) => (
          <CSSTransition
            classNames={{
              enter: styles.newslist_wrapper,
              enterActive: styles.newslist_wrapper_enter
            }}
            timeout={500}
            key={idx}
          >
            <div key={idx}>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${id}`}>
                  <CardInfo teams={teams} team={team} date={date} />
                  <h2>{title}</h2>
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
        <Button type="loadMore" loadMore={this.loadMore} cta="Load More News" />
      </div>
    );
  }
}
