import goethe_logo from "../assets/goethe_logo.jpg";
import cook_icon from "../assets/start_to_cook.png";
import home_icon from "../assets/home_icon.svg";
import styles from "./header_styles.module.css";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className={`${styles.header} ${styles.flexContainer}`}>
      <Link to="/" className={styles.item}>
        <img src={home_icon} alt="Home Icon" className={styles.logo} />
      </Link>
      <img
        src={cook_icon}
        alt="Cook Icon"
        className={`${styles.logo} ${styles.item}`}
      />
      <a
        href="https://www.goethegymnasiumdortmund.de"
        className={styles.item}
        target="_blank"
      >
        <img src={goethe_logo} alt="Goethe Logo" className={styles.logo} />
      </a>
    </header>
  );
}

export default HeaderComponent;
