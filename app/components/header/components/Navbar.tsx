import React from "react";
import styles from "../Header.module.css";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";

const Navbar = () => {
  return (
    <nav className={styles.header__wrapper_nav}>
      <ul className={styles.header__nav_list}>
        <li className={styles.header__list_item}>
          <a
            onClick={() => handleScroll("services")}
            className={styles.header__item_link}
          >
            Services
          </a>
        </li>
        <li className={styles.header__list_item}>
          <a
            onClick={() => handleScroll("about")}
            className={styles.header__item_link}
          >
            About Us
          </a>
        </li>
        <li className={styles.header__list_item}>
          <a
            onClick={() => handleScroll("technologies")}
            className={styles.header__item_link}
          >
            Technologies
          </a>
        </li>
        <li className={styles.header__list_item}>
          <a
            onClick={() => handleScroll("portfolio")}
            className={styles.header__item_link}
          >
            Projects
          </a>
        </li>
        <li className={styles.header__list_item}>
          <a
            onClick={() => handleScroll("whyUs")}
            className={styles.header__item_link}
          >
            Why Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
