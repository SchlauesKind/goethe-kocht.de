import goethe_logo from "../assets/goethe_logo.jpg";
import cook_icon from "../assets/start_to_cook.png";
import home_icon from "../assets/home_icon.svg";
import styles from "./header_styles.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function HeaderComponent() {
  /* Consts for the falling menu */
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.flexContainer}>
        <Link to="/" className={styles.item}>
          <img src={home_icon} alt="Home Icon" className={styles.logo} />
        </Link>
        <img
          src={cook_icon}
          alt="Cook Icon"
          className={`${styles.logo} ${styles.item} ${styles.menuButton}`}
          onClick={toggleMenu}
        ></img>
        <a
          href="https://www.goethegymnasiumdortmund.de"
          className={styles.item}
          target="_blank"
        >
          <img src={goethe_logo} alt="Goethe Logo" className={styles.logo} />
        </a>
      </div>
      {/* Kitchen menu itself it must be fixed!!!!!!!!!!!!!!*/}
      {isOpen && (
        <div className={styles.menuContainer}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default HeaderComponent;
