"use client";
import React, { FC, useRef } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isRounded: boolean;
  ariaLabel: string;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  onClick,
  isRounded,
  ariaLabel,
}) => {
  return (
    <div>
      <button
        className={`${styles.button} ${isRounded ? `${styles.rounded}` : ""}`}
        onClick={onClick}
        type={type}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
