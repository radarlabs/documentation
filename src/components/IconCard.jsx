import React from 'react';
import styles from './IconCard.module.css';
import Card from './Card.jsx';

const IconCard = ({ icon, children, title }) => (
  <Card title={title} className={styles.IconCard}>
    <div className={styles.icon}>
      {icon}
    </div>
    <div className={styles.content}>
      <div className={styles.CardTitle}>{title}</div>
      <p className={styles.description}>{children}</p>
    </div>
  </Card>
);

export default IconCard;
