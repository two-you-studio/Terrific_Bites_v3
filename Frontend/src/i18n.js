import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .use(backend)
  .init({
    debug: true,
    lng: "en", // or dynamically load from localStorage if preferred
    fallbackLng: "en",
    backend: {
      loadPath: '/Terrific_Bites_v3/locales/{{lng}}/translation.json', // Update with your repo name
    },
    interpolation: {
      escapeValue: false, // React handles XSS protection
    },
  });

export default i18n;
