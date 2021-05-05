import React from 'react';
import styles from './LinkCard.module.css';
import Card from './TileCard.jsx';

const LinkCard = ({ linkTo, children, title }) => (
  <a href={linkTo} className={styles.LinkCard}>
    {children}
  </a>
);

export default LinkCard;
