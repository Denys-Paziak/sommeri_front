"use client"

import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Options from "./components/Options";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBurgerMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <section className={styles.header__section}>
        <div className="container">
          <div className={styles.header__wrapper}>
            <Logo />
            <Navbar />
            <Options />

            <div
              onClick={handleBurgerMenu}
              className={`${styles.header__mobile_burger} ${isMobileMenuOpen ? `${styles.active}` : ""
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
