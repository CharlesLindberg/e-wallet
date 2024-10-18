import React from "react";
import styles from "./SettingsPage.module.css";
import { useState } from "react";

const SettingsPage = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const deleteInactiveCards = () => {
    // Fixar logik sen
    console.log("Radera inaktiva kort");
  };

  return (
    <div className={styles.settingsPage}>
      <h1 className={styles.title}>Inställningar</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Väld tema</h2>
        <button onClick={() => handleThemeChange("light")}>Ljust tema</button>
        <button onClick={() => handleThemeChange("dark")}>Darkmode</button>
        <button onClick={() => handleThemeChange("green")}>Alternative</button>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Radera alla inaktiva kort</h2>
        <button className={styles.button} onClick={deleteInactiveCards}>
          Radera inaktiva kort
        </button>
      </section>
    </div>
  );
};

export default SettingsPage;
