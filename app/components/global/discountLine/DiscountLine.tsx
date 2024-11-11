"use client";

import Image from "next/image";
import React from "react";
import styles from "./DiscountLine.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideDiscount } from "@/app/redux/discountSlice";

const DiscountLine = () => {
  const isVisible = useSelector((state: any) => state.discount.isVisible);
  const dispatch = useDispatch();

  if (!isVisible) return null;

  return (
    <div className={styles.discount__line}>
      <div className={styles.discount__line_content}>
        <span className={styles.discount__line_text}>
          Знижка <strong>10%</strong> на сайт до <strong>31 грудня</strong>
        </span>
        <button
          type="button"
          className={styles.discount__line_close}
          onClick={() => dispatch(hideDiscount())}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.07107 15.2132L8.14214 8.14209M8.14214 8.14209L15.2132 1.07102M8.14214 8.14209L1.07107 1.07102M8.14214 8.14209L15.2132 15.2132"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.discount__line_vector}>
        <Image
          src="/images/discount-leaf.avif"
          alt="discount vector"
          width={2000}
          height={100}
        />
      </div>
    </div>
  );
};

export default DiscountLine;
