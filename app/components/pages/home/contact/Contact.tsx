import React from "react";
import ContactForm from "@/app/components/global/contactForm/ContactForm";
import styles from "./Contact.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

const Contact = () => {
  const t = useTranslations("home.contact");

  return (
    <SectionWrapper sectionId="contactUs">
      <div className="container">
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__wrapper_heading}>
            <AnimatedWrapper type="fade-up" duration={1.2}>
              <TitleWrapper>{t("title")}</TitleWrapper>
            </AnimatedWrapper>
            <AnimatedWrapper type="fade-up" duration={1.4}>
              <p className={styles.contact__heading_subtitle}>{t("subtitle")}</p>
            </AnimatedWrapper>
          </div>
          <div className={styles.contact__wrapper_main}>

            <AnimatedWrapper type="fade-up" duration={1.4}>
              <ContactForm />
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
