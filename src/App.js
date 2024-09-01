import React, { useState } from "react";
import "./App.css";
import { LanguageContext } from "./context/LanguageContext";
import SwitchLanguage from "./components/switchLanguage";
import TextChange from "./components/textChange";

const translations = {
  en: {
    welcome: "English language was chosen",
  },
  ru: {
    welcome: "Был выбран английский язык.",
  },
};

function App() {
  const [language, setLanguage] = useState("en");

  function switchLanguage(newLanguege) {
    setLanguage(newLanguege);
  }

  return (
    <div className="App">
      <LanguageContext.Provider
        value={{ language, switchLanguage, translations }}
      >
        <TextChange />
        <SwitchLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
