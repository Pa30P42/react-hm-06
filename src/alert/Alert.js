import React from "react";
import styles from "./Alert.module.css";

const Alert = ({ alertSwitch }) => {
  return (
    <div className={styles.alertWrapper}>
      <p>Contact already exist !</p>
      <button onClick={alertSwitch} className={styles.btn}>
        Ok
      </button>
    </div>
  );
};

export default Alert;
