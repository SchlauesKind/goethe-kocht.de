import styles from "./credits.module.css";

function Credits() {
  return (
    <div className={styles.creditsBody}>
      <h1 className={styles.creditsHeader}>Credits</h1>
      <p>
        Website developed by Roma Fyodorov and contributors as a school project.
      </p>
      <p>
        This website is for educational purposes only and does not represent the
        official views of Goethe Gymnasium Dortmund. All content is provided "as
        is" without any warranties.
      </p>
      <h1>Sources</h1>
      <ul>
        <li>
          <a href="https://www.countryflags.com/">Country Flags</a>
        </li>
        <li>
          <a href="https://www.svgrepo.com/">SVG Icons Repo</a>
        </li>
      </ul>
    </div>
  );
}

export default Credits;
