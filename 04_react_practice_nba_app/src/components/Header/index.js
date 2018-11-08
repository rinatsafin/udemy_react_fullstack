import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNavigator from "./SideNav";

import style from "./header.css";

const Header = props => {
  const { onOpenNav } = props;
  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img src="/images/nba_logo.png" alt="NBA logo" />
      </Link>
    );
  };
  const navBars = () => {
    return (
      <div className={style.bars}>
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
    <header className={style.header}>
      <SideNavigator {...props} />
      <div className={style.header_opt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
