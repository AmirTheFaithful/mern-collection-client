import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          postInfoCard: {
            visit: "Visit Profile",
          },
        },
      },
      ua: {
        translation: {
          postInfoCard: {
            visit: "Відвідати Профіль",
          },
        },
      },
      ar: {
        translation: {
          postInfoCard: {
            visit: "زيارة الملف الشخصي",
          },
        },
      },
    },
  });

export default i18n;
