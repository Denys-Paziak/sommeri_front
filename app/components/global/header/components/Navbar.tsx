import React from "react";
import styles from "../Header.module.css";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
import SectionLink from "@/app/components/UI/sectionLink/SectionLink";

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
          <SectionLink
            key={NavbarItem.name}
            name={NavbarItem.name}
            link={NavbarItem.link}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
