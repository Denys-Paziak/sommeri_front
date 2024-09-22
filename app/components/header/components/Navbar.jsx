import React from "react";
import styles from "../Header.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.header__wrapper_nav}>
      <ul className={styles.header__nav_list}>
        <li className={styles.header__list_item}>
          <Link href={"/"} className={styles.header__item_link}>
            Services
          </Link>
        </li>
        <li className={styles.header__list_item}>
          <Link href={"/"} className={styles.header__item_link}>
            About Us
          </Link>
        </li>
        <li className={styles.header__list_item}>
          <Link href={"/"} className={styles.header__item_link}>
            Technologies
          </Link>
        </li>
        <li className={styles.header__list_item}>
          <Link href={"/"} className={styles.header__item_link}>
            Projects
          </Link>
        </li>
        <li className={styles.header__list_item}>
          <Link href={"/"} className={styles.header__item_link}>
            Why Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
