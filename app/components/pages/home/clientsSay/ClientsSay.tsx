"use client";

import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import styles from "./ClientsSay.module.css";
import Reviews from "@/app/components/global/reviews/Reviews";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "use-intl";

interface Review {
  id: number;
  name: string;
  content: string;
  rating: number;
}

interface ClientsSayProps {
  reviews: Review[];
}

const ClientsSay: React.FC<ClientsSayProps> = ({ reviews }) => {
  const t = useTranslations("home.reviews");

  return (
    <SectionWrapper sectionId="reviews">
      <div className="container">
        <div className={styles.client__say_wrapper}>
          <div className={styles.client__say_heading}>
            <TitleWrapper>{t("title")}</TitleWrapper>
            <p className={styles.client__heading_subtitle}>{t("subtitle")}</p>
          </div>
        </div>
      </div>
      <Reviews reviews={reviews} />
      <div className={styles.client__say_shape}></div>
    </SectionWrapper>
  );
};

export default ClientsSay;
