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
import enInfluences from "./locales/enus/influences.json";
import ptInfluences from "./locales/ptbr/influences.json";



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en:   { navbar: enNav,   profile: enProfile, projects: enProjects, influences: enInfluences }, 
      ptBR: { navbar: ptNav,   profile: ptProfile, projects: ptProjects, influences: ptInfluences}, 
    },
    ns: ["navbar", "profile", "projects","influences"],
    defaultNS: "navbar",
    fallbackLng: "en",
    detection: { order: ["localStorage","navigator"], caches: ["localStorage"] },
    interpolation: { escapeValue: false }
  });

export default i18n;
