import React from "react";
import styles from "../Header.module.css";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
import SectionLink from "@/app/components/UI/sectionLink/SectionLink";
import Options from "./Options";

interface iProps {
  isMobileMenuOpen: boolean;
}

const Navbar = ({ isMobileMenuOpen }: iProps) => {
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
    <nav
      className={`${styles.header__wrapper_nav} ${
        isMobileMenuOpen ? `${styles.active}` : ""
      }`}
    >
      <ul className={styles.header__nav_list}>
        {NavbarItems.map((NavbarItem) => (
          <SectionLink
            key={NavbarItem.name}
            name={NavbarItem.name}
            link={NavbarItem.link}
          />
        ))}
      </ul>

      <Options />
    </nav>
  );
};

export default Navbar;
