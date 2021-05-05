import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, className }) => (
  <div className={`${styles.Card} ${className}`}>
    {children}
  </div>
);

export default Card;
