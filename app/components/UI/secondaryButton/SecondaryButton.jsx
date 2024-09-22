"use client";

import React from "react";
import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ children, type }) => {
  return (
    <button className={styles.seconddary__button} type={type}>
      {children}
    </button>
  );
};

export default SecondaryButton;
