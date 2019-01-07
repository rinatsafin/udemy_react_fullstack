import React from "react";
import { Link } from "react-router-dom";

import CardInfo from "../../CardInfo";
import styles from "./videosListTemplate.css";

const VideosListTemplate = ({ data, teams }) => {
  return data.map(({ id, name, title, image, team, date }, idx) => (
    <Link to={`/videos/${id}`} key={idx}>
      <div className={styles.videosListItemWrapper}>
        <div
          className={styles.left}
          style={{
            background: `url(images/videos/${image}) no-repeat 50% 0`
          }}
        >
          <div>{name}</div>
        </div>
        <div className={styles.right}>
          <CardInfo teams={teams} team={team} date={date} />
          <h2>{title}</h2>
        </div>
      </div>
    </Link>
  ));
};
export default VideosListTemplate;
