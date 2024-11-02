import styles from "./loader.module.css";

import React from "react";

const MyComponent = () => {
  return (
    <main className={styles.loader__wrapper}>
      <svg
        className={styles.lp}
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#000" />
            <stop offset="100%" stop-color="#fff" />
          </linearGradient>
          <mask id="mask1">
            <rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
          </mask>
        </defs>
        <g fill="none" stroke-linecap="round" stroke-width="16">
          <circle
            className={styles.lp__ring}
            r="56"
            cx="64"
            cy="64"
            stroke="#ddd"
          />
          <g stroke="hsl(163, 41%, 52%)">
            <polyline className="lp__fall-line" points="64,8 64,120" />
            <polyline
              className={`${styles.lp__fall_line} ${styles.lp__fall_line_delay1}`}
              points="64,8 64,120"
            />
            <polyline
              className={`${styles.lp__fall_line} ${styles.lp__fall_line_delay2}`}
              points="64,8 64,120"
            />
            <polyline
              className={`${styles.lp__fall_line} ${styles.lp__fall_line_delay3}`}
              points="64,8 64,120"
            />
            <polyline
              className={`${styles.lp__fall_line} ${styles.lp__fall_line_delay4}`}
              points="64,8 64,120"
            />
            <circle
              className={styles.lp__drops}
              r="56"
              cx="64"
              cy="64"
              transform="rotate(90,64,64)"
            />
            <circle
              className={styles.lp__worm}
              r="56"
              cx="64"
              cy="64"
              transform="rotate(-90,64,64)"
            />
          </g>
          <g stroke="hsl(194, 77%, 38%)" mask="url(#mask1)">
            <polyline className={styles.lp__fall_line} points="64,8 64,120" />
            <polyline
              className={`${styles.lp__fall_line} ${styles.lp__fall_line_delay1}`}
              points="64,8 64,120"
            />
            <polyline
              className={`${styles.lp__fall_line} ${styles.lp__fall_line_delay2}`}
              points="64,8 64,120"
            />
            <polyline
              className={`${styles.lp__fall_line} ${styles.lp__fall_line_delay3}`}
              points="64,8 64,120"
            />
            <polyline
              className={`${styles.lp__fall_line} ${styles.lp__fall_line_delay4}`}
              points="64,8 64,120"
            />
            <circle
              className={styles.lp__drops}
              r="56"
              cx="64"
              cy="64"
              transform="rotate(90,64,64)"
            />
            <circle
              className={styles.lp__worm}
              r="56"
              cx="64"
              cy="64"
              transform="rotate(-90,64,64)"
            />
          </g>
        </g>
      </svg>
    </main>
  );
};

export default MyComponent;
