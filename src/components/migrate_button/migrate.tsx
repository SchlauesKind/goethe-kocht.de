import styles from "./migrate.module.css"

function MigratePlate () {

    return (
        <div className={styles.backPlate}>
            <div className={styles.plateContainer}>
                <div><h1>Diese Seite kann outdated sein</h1>
                <p>
                    Sie verwenden gerade die Webseite, die in ihrer Entwicklung und Aktualisierung eingefroren ist. <br />
                    Wechseln Sie zu der aktuellsten Seite um Kochbuch 2.0 zu erleben!
                </p></div>
                <div className={styles.buttonContainer}>
                    <a className={`${styles.migrateButton} ${styles.button}`} href="https://schlaueskind.github.io/goethe-kocht.de/">Akzeptieren</a>
                    <div className={`${styles.stayButton} ${styles.button}`}>Ablehnen</div>
                </div>
            </div>
        </div>
    );
}
export default MigratePlate;

