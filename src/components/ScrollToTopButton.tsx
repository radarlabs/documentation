import React from 'react';
import styles from './ScrollToTopButton.module.css';

import UpArrowSvg from '../../static/img/up-arrow.svg';

const scrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return <button className={styles.ScrollToTopButton} onClick={handleClick}>
    <UpArrowSvg />
  </button>
}

export default scrollToTopButton;
