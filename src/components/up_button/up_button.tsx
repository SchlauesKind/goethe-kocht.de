import up_icon from "./up.svg";
import styles from "./up_button.module.css";

function UpButton() {
  return (
    <div className={`${styles.upButton}`} onClick={() => window.scrollTo(0, 0)}>
      <img src={up_icon} alt="Up Icon" className={styles.logo} />
    </div>
  );
}
export default UpButton;
