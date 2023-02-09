import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, type = "primary" }) => {
  return <button className={`${styles.Button} ${styles[`Button--${type}`]}`}>{children}</button>;
};

export default Button;
