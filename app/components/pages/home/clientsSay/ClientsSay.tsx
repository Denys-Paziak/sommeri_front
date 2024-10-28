"use client";

import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import styles from "./ClientsSay.module.css";
import Reviews from "@/app/components/global/reviews/Reviews";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "use-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";
import { Review } from "@/app/utils/interfaces/reviews"; // імпорт інтерфейсу

const ClientsSay = ({ reviews }: { reviews: Review[] }) => {
  const t = useTranslations("home.reviews");

  return (
    <SectionWrapper sectionId="reviews">
      <div className="container">
        <div className={styles.client__say_wrapper}>
          <div className={styles.client__say_heading}>
            <AnimatedWrapper type="fade-up" duration={1.2}>
              <TitleWrapper>{t("title")}</TitleWrapper>
            </AnimatedWrapper>
            <AnimatedWrapper type="fade-up" duration={1.4}>
              <p className={styles.client__heading_subtitle}>{t("subtitle")}</p>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
      <AnimatedWrapper type="fade-up" duration={1.4}>
        <Reviews reviews={reviews} />
      </AnimatedWrapper>
    </SectionWrapper>
  );
};

export default ClientsSay;
