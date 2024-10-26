"use client";

import Image from "next/image";
import styles from "./About.module.css";
import SecondaryButton from "@/app/components/UI/secondaryButton/SecondaryButton";
import LineVector from "@/app/components/global/lineVector/LineVector";
import React from "react";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";

const About = () => {
  const t = useTranslations("home.about");

  return (
    <SectionWrapper sectionId="about">
      <div className="container">
        <div className={styles.about__wrapper}>
          <TitleWrapper>{t("title")}</TitleWrapper>
          <div className={styles.about__wrapper_main}>
            <div className={styles.about__main_info}>
              <h3 className={styles.about__info_subtitle}>{t("subtitle")}</h3>
              <p className={styles.about__info_text}>{t("text")}</p>
              <SecondaryButton
                type={"button"}
                onClick={() => handleScroll("reviews")}
              >
                {" "}
                {t("secondaryButton")}
              </SecondaryButton>
            </div>
            <div className={styles.about__main_banner}>
              <Image
                src={t("vectorLink")}
                alt="about us vector"
                width={500}
                height={500}
                className={styles.about__banner_vector}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vector}>
        <LineVector />
      </div>
    </SectionWrapper>
  );
};

export default About;
