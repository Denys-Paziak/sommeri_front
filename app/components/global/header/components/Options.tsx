"use client";

import React from "react";
import styles from "../Header.module.css";
import Button from "@/app/components/UI/button/Button";
import LanguageSelector from "@/app/components/global/header/components/LanguageSelector";
import { useDispatch } from "react-redux";
import { openPopup } from "@/app/redux/popupSlice";
import { useTranslations } from "next-intl";
import { useTheme } from 'next-themes'


const Options = () => {
  const dispatch = useDispatch();
  const t = useTranslations("header");
  const { theme, setTheme } = useTheme();



  const themeHandler = () => {
    if (theme == "light") {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  return (
    <div className={styles.header__wrapper_options}>
      <LanguageSelector />

      <div >
        <label className={styles.switch}>
          <input type="checkbox" checked={theme === "dark"} onClick={themeHandler} />
          <span className={styles.slider}></span>
        </label>
      </div>


      <Button
        isRounded={true}
        onClick={() => dispatch(openPopup())}
        ariaLabel={t("button")}
      >
        {t("button")}
      </Button>
    </div>
  );
};

export default Options;
