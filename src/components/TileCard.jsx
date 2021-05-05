import React from 'react';
import styles from './TileCard.module.css';
import Card from './Card.jsx'

const TileCard = ({ children, title}) => {
  return (
    <Card className={styles.TileCard}>
      <div className={styles.CardContent}>{children}</div>
      {title && <div className={styles.CardTitle}>{title}</div>}
    </Card>
  )
};

export default TileCard;
