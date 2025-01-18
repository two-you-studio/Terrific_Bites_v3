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
    lng: "en",
    fallbackLng: "en",
      });

export default i18n;