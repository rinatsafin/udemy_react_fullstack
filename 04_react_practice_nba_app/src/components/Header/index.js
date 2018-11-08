import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNavigator from "./SideNav";

import styles from "./header.css";

const Header = props => {
  const { onOpenNav } = props;
  const logo = () => {
    return (
      <Link to="/" className={styles.logo}>
        <img src="/images/nba_logo.png" alt="NBA logo" />
      </Link>
    );
  };
  const navBars = () => {
    return (
      <div className={styles.bars}>
        <FontAwesome
          name="bars"
          onClick={onOpenNav}
          style={{
            color: "#dfdfdf",
            padding: "10px",
            cursor: "pointer"
          }}
        />
      </div>
    );
  };
  return (
    <header className={styles.header}>
      <SideNavigator {...props} />
      <div className={styles.header_opt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
