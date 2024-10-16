import Image from "next/image";
import styles from "./About.module.css";
import SecondaryButton from "@/app/components/UI/secondaryButton/SecondaryButton";
import LineVector from "@/app/components/global/lineVector/LineVector";
import React from "react";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper sectionId="about">
      <div className="container">
        <div className={styles.about__wrapper}>
          <TitleWrapper>About us</TitleWrapper>
          <div className={styles.about__wrapper_main}>
            <div className={styles.about__main_info}>
              <h3 className={styles.about__info_subtitle}>
                Welcome to Sommeri, where beautiful design meets seamless
                functionality.
              </h3>
              <p className={styles.about__info_text}>
                We are the team that will create a customized solution for your
                business. From the very beginning, we made a decision to focus
                on our strengths and constantly improve them. This approach
                allows us not only to become experts in our field, but also to
                provide our clients with the exceptional experience they
                deserve. We are committed to innovation and quality, as every
                step we take is aimed at exceeding expectations and creating a
                truly valuable product.
              </p>
              <SecondaryButton type={"button"}>Reviews</SecondaryButton>
            </div>
            <div className={styles.about__main_banner}>
              <Image
                src="/images/about-us-vector.svg"
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
