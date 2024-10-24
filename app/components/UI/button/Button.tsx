"use client";
import React, { FC, useRef } from "react";
import styles from "./Button.module.css";
import { gsap } from "gsap";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  arrowColor?: string;
  style?: "fill" | "outline";
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  onClick,
  arrowColor,
  style,
}) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
