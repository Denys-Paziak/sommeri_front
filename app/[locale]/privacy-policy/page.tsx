import { useTranslations } from "next-intl";

import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import styles from "./PrivacyPolicy.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import { infoEmail } from "@/configSommeriData";
import { Link } from "@/navigation";

const PrivacyPolicy = () => {
  const t = useTranslations("privacyPolicy");

  return (
    <SectionWrapper>
      <div className="container">
        <div className={styles.privacy__policy_wrapper}>
          <TitleWrapper>{t("title")}</TitleWrapper>
          <div className={styles.privacy__wrapper_main}>
            <p className={styles.privacy__policy_text}>
              {t.rich("subtext", {
                bold: (chunks) => (
                  <span className={styles.privacy__policy_bold}>{chunks}</span>
                ),
              })}
            </p>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                1. {t("firstSubtitle")}
              </h3>
              <p className={styles.privacy__policy_text}>
                {t("firstSubtitleText")}
              </p>
              <ul className={styles.privacy__policy_list}>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    {t.rich("firstSubtitleItem1", {
                      bold: (chunks) => (
                        <span className={styles.privacy__policy_bold}>
                          {chunks}
                        </span>
                      ),
                    })}
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    {t.rich("firstSubtitleItem2", {
                      bold: (chunks) => (
                        <span className={styles.privacy__policy_bold}>
                          {chunks}
                        </span>
                      ),
                    })}
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    {t.rich("firstSubtitleItem3", {
                      bold: (chunks) => (
                        <span className={styles.privacy__policy_bold}>
                          {chunks}
                        </span>
                      ),
                    })}
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                2. {t("secondSubtitle")}
              </h3>
              <p className={styles.privacy__policy_text}>
                {t("secondSubtitleText")}
              </p>
              <ul className={styles.privacy__policy_list}>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    {t("secondSubtitleItem1")}
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    {t("secondSubtitleItem2")}
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    {t("secondSubtitleItem3")}
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                3. {t("thirdSubtitle")}
              </h3>
              <p className={styles.privacy__policy_text}>{t("thirdText")}</p>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                4. {t("fourthSubtitle")}
              </h3>
              <p className={styles.privacy__policy_text}>{t("fourthText")}</p>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                5. {t("fifthSubtitle")}
              </h3>
              <p className={styles.privacy__policy_text}>{t("fifthText")}</p>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                6. {t("sixthSubtitle")}
              </h3>
              <p className={styles.privacy__policy_text}>{t("sixthText")}</p>
            </div>
            <p className={styles.privacy__policy_text}>
              {t("footerText")}{" "}
              <Link
                href={`mailto:${infoEmail}`}
                className={styles.privacy__policy_link}
              >
                {infoEmail}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PrivacyPolicy;
