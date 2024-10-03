import React from "react";
import styles from "../Header.module.css";
import Button from "@/app/components/UI/button/Button";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
import LanguageSelector from "@/app/components/global/header/components/LanguageSelector";

const Options = () => {
  return (
    <div className={styles.header__wrapper_options}>
      <Button style={"fill"} onClick={() => handleScroll("contactUs")}>
        Contact us
      </Button>
        <LanguageSelector />
    </div>
  );
};

export default Options;
