import React from "react";
import styles from "../Header.module.css";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} className={styles.header__wrapper_logo}>
      <Image width={300} height={100} src="../../images/logo.svg" alt="logo" className={styles.header__logo_icon} />
    </Link>
  );
};

export default Logo;
