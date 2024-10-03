"use client"

import React, {useState} from "react";
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
        <>

            <header className={styles.header}>
                <section className={styles.header__section}>
                    <div className="container">
                        <div className={`${isMobileMenuOpen ? styles.header__wrapper_nav_active : ''} ${styles.header__wrapper}`}>
                            <Logo/>
                            <Navbar/>
                            <Options/>

                            <div className={styles.hamburger}>
                                <label >
                                    <input type="checkbox" onChange={handleBurgerMenu} />
                                    <svg viewBox="0 0 32 32">
                                        <path className={`${styles.line} ${styles.lineTopBottom}`}
                                              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                        <path className={`${styles.line}`} d="M7 16 27 16"></path>
                                    </svg>
                                </label>
                            </div>

                        </div>
                    </div>
                </section>
            </header>
        </>

    );
};

export default Header;
