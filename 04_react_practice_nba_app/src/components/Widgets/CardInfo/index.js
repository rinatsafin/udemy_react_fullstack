import React from "react";
import FontAwesome from "react-fontawesome";

import styles from "./card_info.css";

const CardInfo = ({ team, teams, date }) => {
  const {
    cardInfo: styleCardInfo,
    teamName: styleTeamName,
    date: styleDate
  } = styles;
  const teamName = (teams, team) => {
    let data = teams.find(({ id }) => id === team);
    if (data) return data.name;
  };
  return (
    <div className={styleCardInfo}>
      <span className={styleTeamName}>{teamName(teams, team)}</span>
      <span className={styleDate}>
        <FontAwesome name="clock-o" />
        {date}
      </span>
    </div>
  );
};

export default CardInfo;
