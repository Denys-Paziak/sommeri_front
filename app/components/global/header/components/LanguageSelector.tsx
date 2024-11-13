import React, { useState } from "react";
import styles from "../Header.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

interface Language {
  code: string;
  name: string;
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (language: Language) => {
    const newLocale = language.code;
    const newPath = `/${newLocale}${pathname.replace(`/${locale}`, "")}`;
    router.push(newPath);
    setIsOpen(false);
  };

  const languages: Language[] = [
    { code: t("langCode1"), name: t("lang1") },
    { code: t("langCode2"), name: t("lang2") },
  ];

  return (
    <div className={styles.language__selector}>
      <div
        className={styles.language__selector_button}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.language__name}>
          {locale === "uk" ? "UA" : locale.toUpperCase()}
        </span>
        <div
          className={`${styles.arrow} ${
            isOpen ? styles.arrowUp : styles.arrowDown
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            height="800"
            width="800"
            version="1.1"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <ul className={styles.language__list}>
          {languages.map((language) => (
            <a
              href={`https://sommeri.com/${language.code}`}
              key={language.code}
              className={styles.language__list_item}
            >
              <span className={styles.language__item_flag}>
                <Image
                  width={20}
                  height={12}
                  fetchPriority="high"
                  src={`/images/${
                    language.code === "uk" ? "ua-flag" : "uk-flag"
                  }.svg`}
                  alt={`${language.name} flag icon`}
                />
              </span>
              <p className={styles.language__item_name}>{language.name}</p>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
