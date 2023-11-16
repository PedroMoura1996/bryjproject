import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import localeEn from "./locales/EN/locale.json";
import localeFr from "./locales/FR/locale.json";

const resources = {
  en: {
    translation: {
      ...localeEn,
    },
  },
  fr: {
    translation: {
      ...localeFr,
    },
  },
};

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources,
});

export default i18next;
