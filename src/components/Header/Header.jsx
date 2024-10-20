import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/addcard">Add new card</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
