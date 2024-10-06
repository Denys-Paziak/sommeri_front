import React from "react";
import ContactForm from "@/app/components/global/contactForm/ContactForm";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contactUs" className={styles.contact__section}>
      <div className="container">
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__wrapper_heading}>
            <h2 className={styles.contact__heading_title}>Let's talk!</h2>
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
    </section>
  );
};

export default Contact;
