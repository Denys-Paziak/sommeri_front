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
    className = "",
    children,
}) => {


    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default AnimatedWrapper;