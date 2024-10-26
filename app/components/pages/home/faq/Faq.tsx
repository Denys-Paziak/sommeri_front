"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Faq.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

interface FaqItem {
  title: string;
  content: string;
}

interface FaqProps {
  faqItems: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("home.faq");

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // Перевіряємо, чи елемент вже активний
  };

  return (
    <SectionWrapper>
      <div className="container">
        <div className={styles.faq__wrapper}>
          <AnimatedWrapper type="fade-up" duration={1.2}>
            <TitleWrapper>{t("title")}</TitleWrapper>
          </AnimatedWrapper>
          <div className={styles.faq__wrapper_main}>
            <AnimatedWrapper type="fade-up" className={styles.faq__main_list}>
              {faqItems &&
                faqItems.map((item, index) => (
                  <div
                    onClick={() => handleClick(index)}
                    key={index}
                    className={`${styles.faq__main_item} ${activeIndex === index ? styles.active : ""
                      }`}
                  >
                    <div className={styles.faq__item_inner}>
                      <h3 className={styles.faq__inner_title}>{item.title}</h3>
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
                    </div >
                    <div className={styles.faq__item_content}>
                      <p className={styles.faq__content_text}>{item.content}</p>
                    </div>
                  </div>
                ))}
            </AnimatedWrapper>
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
    </SectionWrapper>
  );
};

export default Faq;
