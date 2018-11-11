import React from 'react';
import { Link, } from 'react-router-dom';

import styles from "./button.css";

const Button = (props) => {
  let template = null;
  const { type, loadMore, cta } = props;
  switch(type) {
    case "loadmore":
      template = (
        <div 
          className={styles.blue_btn}
          onClick={loadMore}
        >
          {cta}
        </div>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default Button;