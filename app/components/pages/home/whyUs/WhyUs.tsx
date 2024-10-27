import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import styles from "./WhyUs.module.css";
import Image from "next/image";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

const WhyUs = () => {
  const t = useTranslations("home.whyUs");

  return (
    <SectionWrapper sectionId="whyUs">
      <div className="container">
        <div className={styles.why__us_wrapper}>

          {/* Заголовок з анімацією */}
          <AnimatedWrapper type="fade-up" duration={1.2}>
            <div className={styles.why__us_heading}>
              <TitleWrapper>{t("title")}</TitleWrapper>
              <p className={styles.why__heading_subtitle}>{t("subtitle")}</p>
            </div>
          </AnimatedWrapper>

          <div className={styles.why__us_main}>
            {[...Array(6)].map((_, index) => (
              <AnimatedWrapper
                key={index}
                type="fade-up"
                duration={1.4}
                delay={index * 0.2}
              >
                <div className={styles.why__main_block}>
                  <div className={styles.why__block_icon}>
                    <Image
                      width="50"
                      height="40"
                      className={styles.why__icon_item}
                      src={`/images/why-us-icon-${index + 1}.svg`}
                      alt={`why us icon ${index + 1}`}
                    />
                    <div className={styles.why__icon_shape}></div>
                  </div>
                  <div className={styles.why__block_info}>
                    <h3 className={styles.why__info_title}>
                      {t(`item${index + 1}Title`)}
                    </h3>
                    <p className={styles.why__info_text}>
                      {t(`item${index + 1}Text`)}
                    </p>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Нижній вектор з анімацією */}
      <AnimatedWrapper type="fade-up" duration={1.6}>
        <div className={styles.why__us_vector}>
          <Image
            width={2000}
            height={740}
            src="/images/why-us-vector.svg"
            alt="why us vector"
          />
        </div>
      </AnimatedWrapper>
    </SectionWrapper>
  );
};

export default WhyUs;
