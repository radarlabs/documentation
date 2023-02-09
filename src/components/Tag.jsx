import React from "react";
import styles from "./Tag.module.css";

const Tag = ({ children, ...props }) => (
  <span className={styles.Tag}>{children}</span>
);

export default Tag;
