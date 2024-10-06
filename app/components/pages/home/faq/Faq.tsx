"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "./Faq.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Перевіряємо, чи елемент вже активний
  };

  const faqItems = [
    {
      question: "How long does it take to develop a website?",
      answer:
        "Yes, we offer technical support services to ensure stable operation of the website after its launch. Yes, we offer technical support services to ensure stable operation of the website after its launch.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "Yes, we offer technical support services to ensure stable operation of the website after its launch. Yes, we offer technical support services to ensure stable operation of the website after its launch.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "Yes, we offer technical support services to ensure stable operation of the website after its launch. Yes, we offer technical support services to ensure stable operation of the website after its launch.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "Yes, we offer technical support services to ensure stable operation of the website after its launch. Yes, we offer technical support services to ensure stable operation of the website after its launch.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "Yes, we offer technical support services to ensure stable operation of the website after its launch. Yes, we offer technical support services to ensure stable operation of the website after its launch.",
    },
  ];

  return (
    <section className={styles.faq__section}>
      <div className="container">
        <div className={styles.faq__wrapper}>
          <h2 className={styles.faq__wrapper_title}>Question? Answers</h2>
          <div className={styles.faq__wrapper_main}>
            <div className={styles.faq__main_list}>
              {faqItems.map((item, index) => (
                <div
                  onClick={() => handleClick(index)}
                  key={index}
                  className={`${styles.faq__main_item} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <div className={styles.faq__item_inner}>
                    <h3 className={styles.faq__inner_title}>{item.question}</h3>
                    <span className={styles.faq__inner_circle}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33325 6.00016H5.99992M5.99992 6.00016H10.6666M5.99992 6.00016V1.3335M5.99992 6.00016V10.6668"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                    <div className={styles.faq__item_content} >
                      <p className={styles.faq__content_text}>{item.answer}</p>
                    </div>
                </div>
              ))}
            </div>
            <div className={styles.faq__main_grid}>
              <Image
                width="1036"
                height="580"
                src="/images/faq-grid.svg"
                alt="faq grid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;