"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedWrapperProps {
  type?: "fade-up" | "fade-left" | "scale-in" | "rotate";
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
  children: React.ReactNode;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  type = "fade-up",
  duration = 2,
  delay = 0,
  stagger = 0,
  className = "",
  children,
}) => {
  const animatedRef = useRef(null);

  useEffect(() => {
    const element = animatedRef.current;

    let animationProps = {};

    // Налаштування параметрів для кожного типу анімації
    switch (type) {
      case "fade-up":
        animationProps = { opacity: 0, y: 30 };
        break;
      case "fade-left":
        animationProps = { opacity: 0, x: 30 };
        break;
      case "scale-in":
        animationProps = { opacity: 0, scale: 0.8 };
        break;
      case "rotate":
        animationProps = { opacity: 0, scale: 0.8, rotate: 0 };
        break;
      default:
        animationProps = { opacity: 0, y: 30 };
    }

    // Виконання анімації з використанням ScrollTrigger
    gsap.fromTo(element, animationProps, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom top",
        // scrub: true,
      },
    });
  }, [type, duration, delay]);

  return (
    <div className={className} ref={animatedRef}>
      {children}
    </div>
  );
};

export default AnimatedWrapper;
