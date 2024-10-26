"use client";
import React, { FC, useRef } from "react";
import styles from "./Button.module.css";
import { gsap } from "gsap";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isRounded: boolean;
}

const Button: FC<ButtonProps> = ({ children, type, onClick, isRounded }) => {
  return (
    <div>
      <button
        className={`${styles.button} ${isRounded ? `${styles.rounded}` : ""}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
