import React from 'react';
import NewsListItem from '../news_list_item/news_list_item';

const NewsList = (props) => {
  const { news, children, } = props;
  return (
    <div>
      {children}
      <ul>
        {news.map(item => <NewsListItem key={item.id} item={item}/>)}
      </ul>
    </div>
  )
};
export default NewsList;