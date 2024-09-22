import React from "react";
import styles from "../Header.module.css";
import Button from "@/app/components/UI/button/Button";

const Options = () => {
  return (
    <div className={styles.header__wrapper_options}>
      <Button style={"fill"}>Contact us</Button>
    </div>
  );
};

export default Options;
