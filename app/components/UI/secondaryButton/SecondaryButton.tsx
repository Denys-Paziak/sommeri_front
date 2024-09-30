"use client";

import React, { FC } from "react";
import styles from "./SecondaryButton.module.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const SecondaryButton: FC<Props> = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} className={styles.seconddary__button} type={type}>
      {children}
    </button>
  );
};

export default SecondaryButton;
