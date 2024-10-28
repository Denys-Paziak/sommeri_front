"use client";

import React from "react";
import styles from "../Header.module.css";
import Button from "@/app/components/UI/button/Button";
import LanguageSelector from "@/app/components/global/header/components/LanguageSelector";
import { useDispatch } from "react-redux";
import { openPopup } from "@/app/redux/popupSlice";
import { useTranslations } from "next-intl";

const Options = () => {
  const dispatch = useDispatch();
  const t = useTranslations("header");

  return (
    <div className={styles.header__wrapper_options}>
      <LanguageSelector />
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
