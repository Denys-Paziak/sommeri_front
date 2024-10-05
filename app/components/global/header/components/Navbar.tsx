import React from "react";
import styles from "../Header.module.css";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
import SectionLink from "@/app/components/global/sectionLink/SectionLink";

const Navbar = () => {
  const NavbarItems = [
    {
      name: "Services",
      link: "services",
    },
    {
      name: "About us",
      link: "about",
    },
    {
      name: "Technologies",
      link: "technologies",
    },
    {
      name: "Projects",
      link: "portfolio",
    },
    {
      name: "Why us",
      link: "whyUs",
    },
  ];

  return (
    <nav className={styles.header__wrapper_nav}>
      <ul className={styles.header__nav_list}>
        {NavbarItems.map((NavbarItem) => (
          <SectionLink name={NavbarItem.name} link={NavbarItem.link} />
        ))}
        {/* <li className={styles.header__list_item}>
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
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
