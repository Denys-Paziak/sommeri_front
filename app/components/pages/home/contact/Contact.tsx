import React from "react";
import ContactForm from "@/app/components/global/contactForm/ContactForm";
import styles from "./Contact.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("home.contact");

  return (
    <SectionWrapper sectionId="contactUs">
      <div className="container">
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__wrapper_heading}>
            <TitleWrapper>{t("title")}</TitleWrapper>
            <p className={styles.contact__heading_subtitle}>{t("subtitle")}</p>
          </div>
          <div className={styles.contact__wrapper_main}>
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
