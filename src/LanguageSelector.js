import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Contains the value and text for the optinos
const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "fr", text: "Français" },
  { value: "es", text: "Español" },
  { value: "ru", text: "Русский" },
  { value: "zh", text: "简体中文" },
]

function LanguageSelector() {
  const { t } = useTranslation();

  // Get the initial language from query parameter or local storage
  const queryParams = new URLSearchParams(window.location.search);
  const initialLang = queryParams.get("lng") || localStorage.getItem("selectedLanguage") || "en";
  const [lang, setLang] = useState(initialLang);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);

    // Save selected language to local storage
    localStorage.setItem("selectedLanguage", selectedLang);

    // Get current URL without query parameters
    const loc = window.location.href.split("?")[0];

    // Update URL with selected lagnguage
    window.location.replace(loc + `?lng=${selectedLang}`);
  };

  return (
    <div>
      <label htmlFor="language-select">{t("select_language_label")}</label>
      <select
        id="language-select"
        value={lang}
        onChange={handleChange}>
        {languages.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );

}

export default LanguageSelector;
