import React from "react";
import styles from "../Header.module.css";
import Button from "@/app/components/UI/button/Button";
<<<<<<<< HEAD:app/components/global/header/components/Options.tsx
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
========
import LanguageSelector from "@/app/components/global/header/components/LanguageSelector";
>>>>>>>> 304084b (migration on Nazar):app/components/global/header/components/Options.jsx

const Options = () => {
  return (
    <div className={styles.header__wrapper_options}>
<<<<<<<< HEAD:app/components/global/header/components/Options.tsx
      <Button style={"fill"} onClick={() => handleScroll("contactUs")}>
        Contact us
      </Button>
========
        <LanguageSelector />
      <Button style={"fill"}>Contact us</Button>
>>>>>>>> 304084b (migration on Nazar):app/components/global/header/components/Options.jsx
    </div>
  );
};

export default Options;
