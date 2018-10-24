import React, { Component, } from 'react';
import JSON_DB from './../../db.json';
import Header from '../header/header';
import NewsList from '../news_list/news_list';

//import logo from './images/logo.svg';
//import './styles/App.css';

class App extends Component {

  state = {
    news: JSON_DB
  }
  
  getKeyword = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { news, } = this.state;
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={news}><h1>This news are:</h1></NewsList>
      </div>
    );
  }
}

export default App;