"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Navbar from "./components/Navbar";
import Options from "./components/Options";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleBurgerMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 85) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <section className={styles.header__section}>
        <div className="container">
          <div className={styles.header__wrapper}>
            <Logo />
            <Navbar isMobileMenuOpen={isMobileMenuOpen} />
            <Options />

            <div
              onClick={handleBurgerMenu}
              className={`${styles.header__mobile_burger} ${
                isMobileMenuOpen ? `${styles.active}` : ""
              }`}
            >
              <span className={styles.header__burger_bar}></span>
              <span className={styles.header__burger_bar}></span>
              <span className={styles.header__burger_bar}></span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
