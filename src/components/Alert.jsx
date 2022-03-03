import React from 'react';
import styles from './Alert.module.css';

const Alert = ({ children, alertType }) => {

    if (alertType === "warning") {
        return (
          <div className={`alert ${styles.alert} ${styles.alertWarning}`} role="alert">
            {children}
          </div>
        );
      }
  
      if (alertType === "info") {
        return (
          <div className={`alert ${styles.alert} ${styles.alertInfo}`} role="alert">
            {children}
          </div>
        );
      }
  
      if (alertType === "success") {
        return (
          <div className={`alert ${styles.alert} ${styles.alertSuccess}`} role="alert">
            {children}
          </div>
        );
      }
  
    return '';
};

export default Alert;
