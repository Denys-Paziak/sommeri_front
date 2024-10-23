import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import styles from "./WhyUs.module.css";
import Image from "next/image";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";

const WhyUs = () => {
  const t = useTranslations("home.whyUs");

  return (
    <SectionWrapper sectionId="whyUs">
      <div className="container">
        <div className={styles.why__us_wrapper}>
          <div className={styles.why__us_heading}>
            <TitleWrapper>{t("title")}</TitleWrapper>
            <p className={styles.why__heading_subtitle}>{t("subtitle")}</p>
          </div>
          <div className={styles.why__us_main}>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-1.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>{t("item1Title")}</h3>
                <p className={styles.why__info_text}>{t("item1Text")}</p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-2.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>{t("item2Title")}</h3>
                <p className={styles.why__info_text}>{t("item2Text")}</p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-3.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>{t("item3Title")}</h3>
                <p className={styles.why__info_text}>{t("item3Text")}</p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-4.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>{t("item4Title")}</h3>
                <p className={styles.why__info_text}>{t("item4Text")}</p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-5.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>{t("item5Title")}</h3>
                <p className={styles.why__info_text}>{t("item5Text")}</p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-6.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>{t("item6Title")}</h3>
                <p className={styles.why__info_text}>{t("item6Text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.why__us_vector}>
        <Image
          width={2000}
          height={740}
          src="/images/why-us-vector.svg"
          alt="why us vector"
        />
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;
