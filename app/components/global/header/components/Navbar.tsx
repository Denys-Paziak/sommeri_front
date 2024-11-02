import React from "react";
import styles from "../Header.module.css";
import SectionLink from "@/app/components/UI/sectionLink/SectionLink";
import Options from "./Options";
import { useTranslations } from "next-intl";

interface iProps {
  isMobileMenuOpen: boolean;
}

const Navbar = ({ isMobileMenuOpen }: iProps) => {
  const t = useTranslations("menu");
  const NavbarItems = [
    {
      name: t("item1"),
      link: "about",
    },
    {
      name: t("item2"),
      link: "services",
    },
    {
      name: t("item3"),
      link: "technologies",
    },
    {
      name: t("item4"),
      link: "portfolio",
    },
    {
      name: t("item5"),
      link: "reviews",
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
