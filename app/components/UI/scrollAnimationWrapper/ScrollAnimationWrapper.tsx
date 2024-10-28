"use client";

import React, { useRef, useEffect, useState } from "react";
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const element = animatedRef.current;

        let animationProps = {};

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
            },
        });
    }, [type, duration, delay, isMobile]);

    return (
        <div className={className} ref={animatedRef}>
            {children}
        </div>
    );
};

export default AnimatedWrapper;
