import React from "react";
import styles from "./SettingsPage.module.css";
import { useNavigate } from "react-router-dom";

const SettingsPage = ({ currentTheme, onThemeChange }) => {
  const navigate = useNavigate();

  const deleteInactiveCards = () => {
    console.log("Radera inaktiva kort");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.settingsPage}>
      <h1 className={styles.title}>Inställningar</h1>
      <p>Nuvarande tema: {currentTheme}</p>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Välj tema</h2>
        <button
          className={styles.button}
          onClick={() => onThemeChange("light")}
        >
          Ljust tema
        </button>
        <button className={styles.button} onClick={() => onThemeChange("dark")}>
          Darkmode
        </button>
        <button
          className={styles.button}
          onClick={() => onThemeChange("green")}
        >
          Grönt tema
        </button>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Radera alla inaktiva kort</h2>
        <button className={styles.button} onClick={deleteInactiveCards}>
          Radera inaktiva kort
        </button>
      </section>

      <button onClick={handleBackToHome} className={styles.button}>
        Till startsidan
      </button>
    </div>
  );
};

export default SettingsPage;
