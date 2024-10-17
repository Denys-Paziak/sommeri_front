"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";
// @ts-ignore
import Slider from "react-infinite-logo-slider";
import { backHost } from "@/app/utils/server/server";

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  image: {
    url: string;
  };
}

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const [sliderWidth, setSliderWidth] = useState(420);

  useEffect(() => {
    // Функція для зміни ширини слайдера в залежності від ширини вікна
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSliderWidth(300); // Для менших екранів
      } else {
        setSliderWidth(420); // Для більших екранів
      }
    };

    // Викликаємо один раз при монтуванні
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.reviews__block}>
      <div className={styles.reviews__block_slider}>
        <ul className={styles.reviews__slider_track}>
          <Slider
            width={`${sliderWidth}px`}
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {reviews &&
              reviews.map((review) => (
                <Slider.Slide key={review.id}>
                  <li className={styles.reviews__track_item}>
                    <div className={styles.reviews__item_header}>
                      <div className={styles.reviews__header_inner}>
                        <Image
                          src={backHost + review.image.url}
                          alt="review logo"
                          width={24}
                          height={24}
                          className={styles.reviews__inner_logo}
                        />
                        <p className={styles.reviews__inner_name}>
                          {review.name}
                        </p>
                      </div>
                      <div className={styles.reviews__header_date}>
                        {review.date}
                      </div>
                    </div>
                    <div className={styles.reviews__item_main}>
                      <p className={styles.reviews__main_text}>{review.text}</p>
                    </div>
                  </li>
                </Slider.Slide>
              ))}
          </Slider>
        </ul>
        <ul className={styles.reviews__slider_track}>
          <Slider
            width="420px"
            duration={20}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {reviews &&
              [...reviews].reverse().map((review) => (
                <Slider.Slide key={review.id}>
                  <li className={styles.reviews__track_item}>
                    <div className={styles.reviews__item_header}>
                      <div className={styles.reviews__header_inner}>
                        <Image
                          src={backHost + review.image.url}
                          alt="review logo"
                          width={24}
                          height={24}
                          className={styles.reviews__inner_logo}
                        />
                        <p className={styles.reviews__inner_name}>
                          {review.name}
                        </p>
                      </div>
                      <div className={styles.reviews__header_date}>
                        {review.date}
                      </div>
                    </div>
                    <div className={styles.reviews__item_main}>
                      <p className={styles.reviews__main_text}>{review.text}</p>
                    </div>
                  </li>
                </Slider.Slide>
              ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
