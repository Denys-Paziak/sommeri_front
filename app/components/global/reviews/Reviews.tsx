"use client";

import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";
// @ts-ignore
import { backHost } from "@/app/utils/server/server";
import { useTheme } from "next-themes";

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  image: {
    url: string;
  };
}

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={
        resolvedTheme == "light"
          ? styles.reviews__block_light
          : styles.reviews__block
      }
    >
      <div className={styles.reviews__block_slider}>
        <div className={styles.reviews__slider_track}>
          {reviews &&
            [...reviews, ...reviews].map((review, index) => (
              <div
                key={index + Date.now()}
                className={styles.reviews__track_item}
              >
                <div className={styles.reviews__item_header}>
                  <div className={styles.reviews__header_inner}>
                    <Image
                      fetchPriority="high"
                      src={backHost + review.image.url}
                      alt="review logo"
                      width={24}
                      height={24}
                      className={styles.reviews__inner_logo}
                    />
                    <p className={styles.reviews__inner_name}>{review.name}</p>
                  </div>
                  <div className={styles.reviews__header_date}>
                    {review.date}
                  </div>
                </div>
                <div className={styles.reviews__item_main}>
                  <p className={styles.reviews__main_text}>{review.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.reviews__block_slider}>
        <div className={styles.reviews__slider_track_right}>
          {reviews &&
            [...reviews, ...reviews].map((review, index) => (
              <div
                key={index + Date.now()}
                className={styles.reviews__track_item}
              >
                <div className={styles.reviews__item_header}>
                  <div className={styles.reviews__header_inner}>
                    <Image
                      fetchPriority="high"
                      src={backHost + review.image.url}
                      alt="review logo"
                      width={24}
                      height={24}
                      className={styles.reviews__inner_logo}
                    />
                    <p className={styles.reviews__inner_name}>{review.name}</p>
                  </div>
                  <div className={styles.reviews__header_date}>
                    {review.date}
                  </div>
                </div>
                <div className={styles.reviews__item_main}>
                  <p className={styles.reviews__main_text}>{review.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
