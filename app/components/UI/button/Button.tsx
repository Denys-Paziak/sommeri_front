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
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btn = btnRef.current;
    if (!btn) return;

    const circle = btn.querySelector("." + styles.circle) as HTMLElement;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(circle, {
      top: `${y}px`,
      left: `${x}px`,
      width: 0,
      height: 0,
      opacity: 1,
    });

    gsap.to(circle, {
      width: rect.width * 2,
      height: rect.width * 2,
      top: `${y - rect.width}px`,
      left: `${x - rect.width}px`,
      duration: 1.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const circle = btn.querySelector("." + styles.circle) as HTMLElement;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(circle, {
      width: 0,
      height: 0,
      top: `${y}px`,
      left: `${x}px`,
      duration: 1.4,
      ease: "power3.out",
    });

  };

  return (
    <div>
      <button
        ref={btnRef}
        className={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>{children}</span>
        <div className={styles.circle} />
      </button>
    </div>
  );
};

export default Button;
