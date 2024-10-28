"use client";

import React, { FC } from "react";
import styles from "./SecondaryButton.module.css";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel: string;
}

const SecondaryButton: FC<Props> = ({ children, type, onClick, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={styles.seconddary__button}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
