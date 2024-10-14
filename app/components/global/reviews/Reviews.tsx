"use client";

import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";
// @ts-ignore
import Slider from "react-infinite-logo-slider";
import { backHost } from "@/app/utils/server/server";

// Типізація для одного відгуку
interface Review {
    id: number;
    name: string;
    date: string;
    text: string;
    image: {
        url: string;
    };
}

// Типізація для пропсів компоненту Reviews
interface ReviewsProps {
    reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
    return (
        <div className={styles.reviews__block}>
            <div className={styles.reviews__block_slider}>
                <ul className={styles.reviews__slider_track}>
                    <Slider
                        width="420px"
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
                                            <p className={styles.reviews__main_text}>
                                                {review.text}
                                            </p>
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
                                            <p className={styles.reviews__main_text}>
                                                {review.text}
                                            </p>
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
