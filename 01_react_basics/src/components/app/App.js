import React, { Component, } from 'react';
import JSON_DB from './../../db.json';
import Header from '../header/header';
import NewsList from '../news_list/news_list';

//import logo from './images/logo.svg';
//import './styles/App.css';

class App extends Component {

  state = {
    news: JSON_DB,
    filtered: [],
  }
  
  getKeyword = (e) => {
    const keyword = e.target.value;
    const { news, } = this.state;
    const filtered = news.filter(item => item.title.indexOf(keyword) > -1);
    this.setState({ filtered, })
  }

  render() {
    const { news, filtered, } = this.state;
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={filtered.length === 0 ? news : filtered}><h1>This news are:</h1></NewsList>
      </div>
    );
  }
}

export default App;