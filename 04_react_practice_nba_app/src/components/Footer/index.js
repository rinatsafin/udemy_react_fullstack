import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.css";

import { CURRENT_YEAR, } from "../../config"

const Footer = () => (
  <div className={styles.footer}>
    <Link to="/" className={styles.logo}>
      <img src="/images/nba_logo.png" alt="NBA logo" />
    </Link>
    <div className={styles.right}>@NBA {CURRENT_YEAR} All rights reserved.</div>
  </div>
);

export default Footer;
