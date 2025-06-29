// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNav from "./locales/enus/navbar.json";
import ptNav from "./locales/ptbr/navbar.json";
import enProfile from "./locales/enus/profile.json";
import ptProfile from "./locales/ptbr/profile.json";
import enProjects from "./locales/enus/projects.json";
import ptProjects from "./locales/ptbr/projects.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en:   { navbar: enNav,   profile: enProfile, projects: enProjects },  // ← here
      ptBR: { navbar: ptNav,   profile: ptProfile, projects: ptProjects },  // ← and here
    },
    ns: ["navbar", "profile", "projects"],
    defaultNS: "navbar",
    fallbackLng: "en",
    detection: { order: ["localStorage","navigator"], caches: ["localStorage"] },
    interpolation: { escapeValue: false }
  });

export default i18n;
