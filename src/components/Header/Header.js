import React from "react";
import styles from "./Header.module.css";

const Header = () => (
    <header className={styles.header}>
        <a href="https://www.project-a.com" className={styles.header__logo}>Project A</a>
    </header>
);

export default Header;
