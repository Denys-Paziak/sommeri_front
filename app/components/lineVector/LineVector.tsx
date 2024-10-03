"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./lineVector.module.css";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const LineVector = () => {
  const svgCircle = useRef(null);
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true); // Встановлюємо, що компонент змонтований

    if (isMounted && svgCircle.current) {
      // Ініціалізуємо анімацію GSAP після монтажу компонента
      gsap.to(svgCircle.current, {
        duration: 10,
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 0,
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, [isMounted]);

  // Якщо компонент ще не змонтований, не рендеримо SVG
  if (!isMounted) {
    return <div className={styles.vector} ref={containerRef}></div>;
  }

  return (
      <div ref={containerRef} className={styles.vector}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="1000"
            viewBox="0 0 350 1100"
            fill="none"
        >
          <path
              id="path"
              d="M102.367 988C237.778 854.323 324.078 701.5 292.468 609.281C263.313 524.221 0.999994 364.5 1.00001 229.815C1.00002 95.1303 66.6977 52.7173 136.131 1"
              stroke="url(#paint0_linear_51_17)"
              strokeLinecap="round"
              strokeLinejoin="round"
          />
          <circle
              ref={svgCircle}
              cx="242.929"
              cy="531.9"
              r="10"
              fill="url(#paint1_linear_51_17)"
              // Не додаємо жодних інлайн-стилів сюди, які можуть конфліктувати
          />
          <defs>
            <linearGradient
                id="paint0_linear_51_17"
                x1="-249.487"
                y1="150.283"
                x2="-246.852"
                y2="1176.13"
                gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.0777673" stopColor="#4CC3E6" stopOpacity="0.16" />
              <stop
                  offset="0.320104"
                  stopColor="#35AFD4"
                  stopOpacity="0.401399"
              />
              <stop offset="0.382295" stopColor="#168AAD" />
              <stop offset="0.451095" stopColor="#38B7DD" stopOpacity="0.4" />
              <stop offset="0.708389" stopColor="#52B69A" stopOpacity="0.16" />
              <stop offset="0.827999" stopColor="#52B69A" stopOpacity="0.02" />
              <stop offset="0.996703" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_51_17"
                x1="252.916"
                y1="541.9"
                x2="232.942"
                y2="541.9"
                gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#52B69A" />
              <stop offset="0.495" stopColor="#2696A8" />
              <stop offset="1" stopColor="#168AAD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
  );
};

export default LineVector;
