import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./styles.module.css";

function SwitchLanguage() {
  const { language, switchLanguage } = useContext(LanguageContext);

  function handleChange() {
    const newLanguage = language === "en" ? "ru" : "en";
    switchLanguage(newLanguage);
  }
  return (
    <div className={styles.button_container}>
      <button onClick={handleChange}>
        Switch <br />
        language
      </button>
    </div>
  );
}

export default SwitchLanguage;
