import styles from "./header_styles.module.css";
import { Link } from "react-router-dom"


function HeaderComponent() {
  return (
    <header className={styles.header}>
      Content will be added soon. This component is Header
      <Link to="/">Zu Homepage</Link>
    </header>
  );
}

export default HeaderComponent;