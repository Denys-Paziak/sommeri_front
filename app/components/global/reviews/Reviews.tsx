"use client";

import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";
// @ts-ignore
import Slider from 'react-infinite-logo-slider';


const reviews = [
    {
        image: '/images/review-logo.svg',
        name: "Liam James",
        date: "12.07.2024",
        text: "sadasd"
    },
    {
        image: '/images/review-logo.svg',
        name: "Liam James",
        date: "12.07.2024",
        text: "sadasd"
    },
    {
        image: '/images/review-logo.svg',
        name: "Liam James",
        date: "12.07.2024",
        text: "sadasd"
    },
    {
        image: '/images/review-logo.svg',
        name: "Liam James",
        date: "12.07.2024",
        text: "sadasd"
    },
    {
        image: '/images/review-logo.svg',
        name: "Liam James",
        date: "12.07.2024",
        text: "sadasd"
    },
    {
        image: '/images/review-logo.svg',
        name: "Liam James",
        date: "12.07.2024",
        text: "sadasd"
    },
    {
        image: '/images/review-logo.svg',
        name: "Liam James",
        date: "12.07.2024",
        text: "sadasd"
    },
];


const Reviews = () => {
    return (
        <div className={styles.reviews__block}>
            <div className={styles.reviews__block_slider}>
                <ul className={styles.reviews__slider_track}>
                    <Slider
                        width="420px"
                        duration={40}
                        pauseOnHover={true}
                        blurBorders={false}
                        blurBoderColor={'#fff'}
                    >
                        {reviews.map((review, index) => {
                            return <Slider.Slide key={index}>
                                <li className={styles.reviews__track_item}>
                                    <div className={styles.reviews__item_header}>
                                        <div className={styles.reviews__header_inner}>
                                            <Image
                                                src={review.image}
                                                alt="review logo"
                                                width={24}
                                                height={24}
                                                className={styles.reviews__inner_logo}
                                            />
                                            <p className={styles.reviews__inner_name}>{review.name}</p>
                                        </div>
                                        <div className={styles.reviews__header_date}>{review.date}</div>
                                    </div>
                                    <div className={styles.reviews__item_main}>
                                        <p className={styles.reviews__main_text}>
                                            {review.text}
                                        </p>
                                    </div>
                                </li>
                            </Slider.Slide>
                        })}

                    </Slider>
                </ul>
                <ul className={styles.reviews__slider_track}>
                    <Slider
                        width="420px"
                        duration={20}
                        pauseOnHover={true}
                        blurBorders={false}
                        blurBoderColor={'#fff'}
                    >
                        {reviews.reverse().map((review, index) => {
                            return <Slider.Slide key={index}>
                                <li className={styles.reviews__track_item}>
                                    <div className={styles.reviews__item_header}>
                                        <div className={styles.reviews__header_inner}>
                                            <Image
                                                src={review.image}
                                                alt="review logo"
                                                width={24}
                                                height={24}
                                                className={styles.reviews__inner_logo}
                                            />
                                            <p className={styles.reviews__inner_name}>{review.name}</p>
                                        </div>
                                        <div className={styles.reviews__header_date}>{review.date}</div>
                                    </div>
                                    <div className={styles.reviews__item_main}>
                                        <p className={styles.reviews__main_text}>
                                            {review.text}
                                        </p>
                                    </div>
                                </li>
                            </Slider.Slide>
                        })}

                    </Slider>
                </ul>
            </div>
        </div>
    );
};

export default Reviews;
