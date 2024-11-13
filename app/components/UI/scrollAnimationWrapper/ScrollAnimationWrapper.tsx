"use client";

import React from "react";

interface AnimatedWrapperProps {
  type?: "fade-up" | "fade-left" | "scale-in" | "rotate";
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
  children: React.ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  className = "",
  children,
}) => {
  return <div className={className}>{children}</div>;
};

export default AnimatedWrapper;
