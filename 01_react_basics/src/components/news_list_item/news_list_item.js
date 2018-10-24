import React from 'react';
import stylesCSS from './css/styles.css';

const NewsListItem = ({ item, }) => {
  const { title, feed, } = item;
  const { news_item } = stylesCSS;
  return (
    <li className={news_item}>
      <h3>{title}</h3>
      <div>{feed}</div>
    </li>
  )
};

export default NewsListItem;