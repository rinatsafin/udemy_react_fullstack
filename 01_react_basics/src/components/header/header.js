import React, { Component, } from 'react';
import styles from './css/styles.css';

class Header extends Component {
  state = {
    active: 'not_active',
    keywords: '',
  }

  inputChangeHandler = (e) => {
    const { value } = e.target;
    const checkActive = value !== '' ? 'active' : 'not_active';
    this.setState({
      active: checkActive,
      keywords: value
    });
  }

  render() {
    const { active } = this.state;
    const { keywords } = this.props;
    return (
      <header className={styles[active]}>
        <div className={styles.logo}>Logo</div>
        {/* <input type="text" onChange={this.inputChangeHandler} /> */}
        <input type="text" onChange={keywords} />
      </header>
    )
  }
}

export default Header;