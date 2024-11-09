"use client";

import Image from "next/image";
import styles from "./About.module.css";
import SecondaryButton from "@/app/components/UI/secondaryButton/SecondaryButton";
import React from "react";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";
import dynamic from "next/dynamic";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
import { useTheme } from "next-themes";

const DynamicLineVectorComponent = dynamic(
  () => import("@/app/components/global/lineVector/LineVector"),
  {
    ssr: false,
  }
);

const About = () => {
  const t = useTranslations("home.about");
  const { theme } = useTheme();
  return (
    <SectionWrapper sectionId="about">
      <div className="container">
        <div className={styles.about__wrapper}>
          <AnimatedWrapper type="fade-up" duration={1.2}>
            <TitleWrapper>{t("title")}</TitleWrapper>
          </AnimatedWrapper>

          <div className={styles.about__wrapper_main}>
            <div className={styles.about__main_info}>
              <AnimatedWrapper type="fade-up" duration={1.5} delay={0.2}>
                <h3 className={styles.about__info_subtitle}>{t("subtitle")}</h3>
              </AnimatedWrapper>

              <AnimatedWrapper type="fade-up" duration={1.8} delay={0.4}>
                <p className={styles.about__info_text}>{t("text")}</p>
              </AnimatedWrapper>

              <AnimatedWrapper type="fade-up" duration={2} delay={0.6}>
                <SecondaryButton
                  type={"button"}
                  ariaLabel={t("secondaryButton")}
                  onClick={() => handleScroll("reviews")}
                >
                  {t("secondaryButton")}
                </SecondaryButton>
              </AnimatedWrapper>
            </div>
            <div className={styles.about__main_banner}>
              <AnimatedWrapper type="fade-left" duration={1.5} delay={0.8}>
                <Image
                  src={theme == "light" ? "/images/light_" + t("vectorLink") : "/images/" + t("vectorLink")}
                  alt="about us vector"
                  width={500}
                  height={500}
                  className={styles.about__banner_vector}
                />
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.vector}>
        <DynamicLineVectorComponent />
      </div>
    </SectionWrapper>
  );
};

export default About;
