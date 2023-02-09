import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import styles from "./IconCard.module.css";
import Tag from "./Tag";

const IconCard = ({
  icon,
  children,
  title,
  href,
  linkText,
  smallIcon = false,
  tagContent,
}) => (
  <div className={styles.IconCard}>
    <div>
      <div
        className={`${styles.icon} ${smallIcon ? styles[`icon--small`] : ""}`}
      >
        {icon}
      </div>
      <div className={styles.CardTitle}>{title}</div>
      {tagContent && <Tag>{tagContent}</Tag>}
      {children && <p className={styles.description}>{children}</p>}
    </div>
    <a className={styles.link} href={useBaseUrl(href)}>
      {linkText}
    </a>
  </div>
);

export default IconCard;
