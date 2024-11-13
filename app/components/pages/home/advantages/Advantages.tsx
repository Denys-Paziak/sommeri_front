"use client";

import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import { useTranslations } from "next-intl";
import React from "react";
import styles from "./Advantages.module.css";
import Image from "next/image";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTheme } from "next-themes";

const Advantages = () => {
  const t = useTranslations("home.advantages");

  const { resolvedTheme } = useTheme();

  return (
    <SectionWrapper>
      <div className="container">
        <div
          className={
            resolvedTheme === "light"
              ? styles.advantages__wrapper_light
              : styles.advantages__wrapper
          }
        >
          <AnimatedWrapper type="fade-up" duration={1.2}>
            <div className={styles.advantages__wrapper_heading}>
              <TitleWrapper>{t("advantagesTitle")}</TitleWrapper>
              <p className={styles.advantages__heading_subtitle}>
                {t("advantagesSubtitle")}
              </p>
            </div>
          </AnimatedWrapper>
          <div className={styles.advantages__wrapper_main}>
            <div className={styles.advantages__main_block}>
              <div className={styles.advantages__block_content}>
                <div className={styles.advantages__content_heading}>
                  <span className={styles.advantages__heading_numeric}>
                    01/:
                  </span>
                  <h3 className={styles.advantages__heading_title}>
                    {t("advantagesBlock1Title")}
                  </h3>
                </div>
                <p className={styles.advantages__content_text}>
                  {t("advantagesBlock1Text")}
                </p>
              </div>
              <div className={styles.advantages__block_vector}>
                <Image
                  src="/images/advantages-vector.avif"
                  alt="advantages vector"
                  width={500}
                  height={360}
                />
              </div>
            </div>
            <div className={styles.advantages__main_block}>
              <div className={styles.advantages__block_content}>
                <div className={styles.advantages__content_heading}>
                  <span className={styles.advantages__heading_numeric}>
                    02/:
                  </span>
                  <h3 className={styles.advantages__heading_title}>
                    {t("advantagesBlock2Title")}
                  </h3>
                </div>
                <p className={styles.advantages__content_text}>
                  {t("advantagesBlock2Text")}
                </p>
              </div>
              <div className={styles.advantages__block_vector}>
                <Image
                  src="/images/advantages-vector.avif"
                  alt="advantages vector"
                  width={500}
                  height={360}
                />
              </div>
            </div>
            <div className={styles.advantages__main_block}>
              <div className={styles.advantages__block_content}>
                <div className={styles.advantages__content_heading}>
                  <span className={styles.advantages__heading_numeric}>
                    03/:
                  </span>
                  <h3 className={styles.advantages__heading_title}>
                    {t("advantagesBlock3Title")}
                  </h3>
                </div>
                <p className={styles.advantages__content_text}>
                  {t("advantagesBlock3Text")}
                </p>
              </div>
              <div className={styles.advantages__block_vector}>
                <Image
                  src="/images/advantages-vector.avif"
                  alt="advantages vector"
                  width={500}
                  height={360}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Advantages;
