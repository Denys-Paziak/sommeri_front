import { useTranslations } from "next-intl";
import { Metadata } from "next";

import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import styles from "./TermsOfUse.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import { infoEmail } from "@/configSommeriData";
import { Link } from "@/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy - Sommeri",
};

const TermsOfUse = () => {
  const t = useTranslations("termsOfUse");

  return (
    <SectionWrapper>
      <div className="container">
        <div className={styles.terms__use_wrapper}>
          <TitleWrapper>{t("title")}</TitleWrapper>
          <div className={styles.terms__wrapper_main}>
            <p className={styles.terms__use_text}>
              {t.rich("subtext", {
                bold: (chunks) => (
                  <span className={styles.terms__use_bold}>{chunks}</span>
                ),
              })}
            </p>
            <div className={styles.terms__main_block}>
              <h3 className={styles.terms__block_header}>
                1. {t("firstSubtitle")}
              </h3>
              <p className={styles.terms__use_text}>
                {t.rich("firstText", {
                  bold: (chunks) => (
                    <span className={styles.terms__use_bold}>{chunks}</span>
                  ),
                })}
              </p>
            </div>
            <div className={styles.terms__main_block}>
              <h3 className={styles.terms__block_header}>
                2. {t("secondSubtitle")}
              </h3>
              <p className={styles.terms__use_text}>
                {t("secondSubtitleText1")}
              </p>
              <ul className={styles.terms__use_list}>
                <li className={styles.terms__list_item}>
                  <p className={styles.terms__use_text}>
                    {t("secondSubtitleItem1")}
                  </p>
                </li>
                <li className={styles.terms__list_item}>
                  <p className={styles.terms__use_text}>
                    {t("secondSubtitleItem2")}
                  </p>
                </li>
                <li className={styles.terms__list_item}>
                  <p className={styles.terms__use_text}>
                    {t("secondSubtitleItem3")}
                  </p>
                </li>
              </ul>
              <p className={styles.terms__use_text}>
                {t("secondSubtitleText2")}
              </p>
            </div>
            <div className={styles.terms__main_block}>
              <h3 className={styles.terms__block_header}>
                3. {t("thirdSubtitle")}
              </h3>
              <p className={styles.terms__use_text}>
                {t.rich("thirdText", {
                  bold: (chunks) => (
                    <span className={styles.terms__use_bold}>{chunks}</span>
                  ),
                })}
              </p>
            </div>
            <div className={styles.terms__main_block}>
              <h3 className={styles.terms__block_header}>
                4. {t("fourthSubtitle")}
              </h3>
              <p className={styles.terms__use_text}>
                {t.rich("fourthText", {
                  bold: (chunks) => (
                    <span className={styles.terms__use_bold}>{chunks}</span>
                  ),
                })}
              </p>
            </div>
            <div className={styles.terms__main_block}>
              <h3 className={styles.terms__block_header}>
                5. {t("fifthSubtitle")}
              </h3>
              <p className={styles.terms__use_text}>
                {t.rich("fifthText", {
                  bold: (chunks) => (
                    <span className={styles.terms__use_bold}>{chunks}</span>
                  ),
                })}
              </p>
            </div>
            <div className={styles.terms__main_block}>
              <h3 className={styles.terms__block_header}>
                6. {t("sixthSubtitle")}
              </h3>
              <p className={styles.terms__use_text}>{t("sixthText")}</p>
            </div>
            <div className={styles.terms__main_block}>
              <h3 className={styles.terms__block_header}>
                7. {t("seventhSubtitle")}
              </h3>
              <p className={styles.terms__use_text}>{t("seventhText")}</p>
            </div>
            <div className={styles.terms__main_block}>
              <h3 className={styles.terms__block_header}>
                8. {t("eighthSubtitle")}
              </h3>
              <p className={styles.terms__use_text}>
                {t("eighthText")}{" "}
                <Link
                  href={`mailto:${infoEmail}`}
                  className={styles.terms__use_link}
                >
                  {infoEmail}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TermsOfUse;
