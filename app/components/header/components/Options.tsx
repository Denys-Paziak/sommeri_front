import React from "react";
import styles from "../Header.module.css";
import Button from "@/app/components/UI/button/Button";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";

const Options = () => {
  return (
    <div className={styles.header__wrapper_options}>
      <Button style={"fill"} onClick={() => handleScroll("contactUs")}>
        Contact us
      </Button>
    </div>
  );
};

export default Options;
