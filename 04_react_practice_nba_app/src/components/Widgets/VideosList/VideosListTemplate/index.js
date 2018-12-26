import React from "react";
import { Link } from "react-router-dom";

import CardInfo from "../../CardInfo";
import styles from "./videosListTemplate.css";

const VideosListTemplate = props => {
  const { data } = props;
  console.log(data);
  return data.map((item, idx) => (
    <Link to={`/videos/${item.id}`} key={idx}>
      <div className={styles.videosListItemWrapper}>
        <div
          className={styles.left}
          style={{
            background: `url(images/videos/${item.image}) no-repeat 50% 0`
          }}
        >
          <div>{item.name}</div>
        </div>
        <div className={styles.right}>
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  ));
};
export default VideosListTemplate;
