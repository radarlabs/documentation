import React from 'react';
import styles from './IconCard.module.css';
import Card from './Card.jsx';

const IconCard = ({ icon, children, title }) => (
  <Card title={title} className={styles.IconCard}>
    <div className={styles.icon}>
      {icon}
    </div>
    <div className={styles.content}>
      <h3 className={styles.CardTitle}>{title}</h3>
      <p className={styles.description}>{children}</p>
    </div>
  </Card>
);

export default IconCard;
