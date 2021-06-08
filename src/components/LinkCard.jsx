import React from 'react';
import styles from './LinkCard.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const LinkCard = ({ linkTo, children, title }) => (
  <a href={useBaseUrl(linkTo)} className={styles.LinkCard}>
    {children}
  </a>
);

export default LinkCard;
