import React, { Component, } from 'react';
import styles from './css/styles.css';

const Header = (props) => {
  const { keywords } = props;
  return (
    <header>
      <div className={styles.logo}>Logo</div>
      <input type="text" onChange={keywords} />
    </header>
  )
}

export default Header;