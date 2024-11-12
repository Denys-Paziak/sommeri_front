"use client";

import Image from "next/image";
import React from "react";
import styles from "./DiscountLine.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hideDiscount } from "@/app/redux/discountSlice";
import { useTranslations } from "next-intl";

const DiscountLine = () => {
  const isVisible = useSelector((state: any) => state.discount.isVisible);
  const dispatch = useDispatch();
  const t = useTranslations("discountLine");

  if (!isVisible) return null;

  return (
    <div className={styles.discount__line}>
      <div className={styles.discount__line_content}>
        <span className={styles.discount__line_text}>
          {t.rich("discountLineText", {
            bold: (chunks) => <strong>{chunks}</strong>,
          })}
        </span>
        <button
          type="button"
          aria-label="close button"
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
