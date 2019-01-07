import React from "react";
import { Link } from "react-router-dom";

import styles from "./button.css";

const Button = ({ type, loadMore, cta, linkTo }) => {
  let template = null;
  const { blue_btn } = styles;
  switch (type) {
    case "loadMore":
      template = (
        <div className={blue_btn} onClick={loadMore}>
          {cta}
        </div>
      );
      break;
    case "linkTo":
      template = (
        <Link to={linkTo} className={blue_btn}>
          {cta}
        </Link>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default Button;
