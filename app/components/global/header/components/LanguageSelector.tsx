import React, { useState } from "react";
import styles from "../Header.module.css";
import Image from "next/image";

interface Language {
  code: string;
  name: string;
}

// const languages: Language[] = [
//   { code: "en", name: "Англійська" },
//   { code: "ua", name: "Українська" },
// ];

const LanguageSelector: React.FC = () => {
  //   const [selectedLanguage, setSelectedLanguage] = useState<Language>(
  //     languages[0]
  //   );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLanguageChange = (language: Language) => {
    // setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSelector}>
      <button
        className={styles.selectorButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.languageName}>EN</span>
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
      </button>

      {isOpen && (
        <ul className={styles.language__list}>
          <li className={styles.language__list_item}>
            <span className={styles.language__item_flag}>
              <Image
                width={20}
                height={18}
                src="/images/ua-flag.svg"
                alt="flag icon"
              />
            </span>
            <p className={styles.language__item_name}>English</p>
          </li>
          <li className={styles.languageItem}>
            <span className={styles.language__item_flag}>
              <Image
                width={20}
                height={18}
                src="/images/us-flag.svg"
                alt="flag icon"
              />
            </span>
            <p className={styles.language__item_name}>Ukrainian</p>
          </li>
          {/* {languages.map((language) => (
          ))} */}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
