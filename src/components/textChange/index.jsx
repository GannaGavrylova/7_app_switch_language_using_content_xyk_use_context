import styles from "./styles.module.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function TextChange() {
  const { language, translations } = useContext(LanguageContext);
  return (
    <div className={styles.text_container}>
      <h1>{translations[language].welcome}</h1>
    </div>
  );
}

export default TextChange;
