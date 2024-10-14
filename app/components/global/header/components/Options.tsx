"use client";

import React from "react";
import styles from "../Header.module.css";
import Button from "@/app/components/UI/button/Button";
import LanguageSelector from "@/app/components/global/header/components/LanguageSelector";
import { useDispatch } from "react-redux";
import { openPopup } from "@/app/redux/popupSlice";

const Options = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.header__wrapper_options}>
      <Button style={"fill"} onClick={() => dispatch(openPopup())}>
        Contact us
      </Button>
      <LanguageSelector />
    </div>
  );
};

export default Options;
