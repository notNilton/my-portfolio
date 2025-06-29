// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enNav from "./locales/enus/navbar.json";
import ptNav from "./locales/ptbr/navbar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en:   { navbar: enNav },
      ptBR: { navbar: ptNav },
    },
    ns: ["navbar"],
    defaultNS: "navbar",
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });
export default i18n;
