import React from "react";
import ContactForm from "@/app/components/global/contactForm/ContactForm";
import styles from "./Contact.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper sectionId="contactUs">
      <div className="container">
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__wrapper_heading}>
            <TitleWrapper>Let's talk!</TitleWrapper>
            <p className={styles.contact__heading_subtitle}>
              Fill in the contact form below, and we'll get back to you soon
            </p>
          </div>
          <div className={styles.contact__wrapper_main}>
            <ContactForm />
            <div className={styles.contact__main_shape}></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
