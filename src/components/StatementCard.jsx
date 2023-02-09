import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import Button from "./Button";
import styles from "./StatementCard.module.css";

const StatementCard = ({
  children,
  title,
  href,
  linkText,
  type = "primary",
}) => (
  <div
    className={`${styles.StatementCard} ${styles[`StatementCard--${type}`]}`}
  >
    <div className={styles.content}>
      <div className={styles.CardTitle}>{title}</div>
      {children}
    </div>
    <a className={styles.link} href={useBaseUrl(href)}>
      <Button type={type}>{linkText}</Button>
    </a>
  </div>
);

export default StatementCard;
