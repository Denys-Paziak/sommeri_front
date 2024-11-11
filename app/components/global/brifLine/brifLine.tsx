import React from "react";
import Button from "@/app/components/UI/button/Button";
import Image from "next/image";
import styles from "./brifLine.module.css";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";

const BrifLine = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <div className={styles.line__wrapper}>
          <div className={styles.line__vector_main}>
            <div className={styles.line__wrapper_content}>
              <h2 className={styles.line__content_title}>
                Безкоштовний аудит сайту
              </h2>
              <p className={styles.line__content_text}>
                Ми допоможемо вам із розробкою та запуском вашого проекту.
              </p>
            </div>
            <div className={styles.line__wrapper_action}>
              <Button ariaLabel={"brif"} isRounded={true} type={"button"}>
                Заповнити бриф
              </Button>
            </div>
          </div>
          <div className={styles.line__wrapper_vector}>
            <Image
              width={1400}
              height={300}
              src="/images/why-us-vector.svg"
              alt="line vector"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BrifLine;
