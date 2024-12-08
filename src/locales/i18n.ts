import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          postInfoCard: {
            visit: "Visit Profile",
          },
          loginPage: {
            heading: "Sign In",
            subheading:
              "Log in to your account by entering your email and password.",
            emailField: "Email",
            passwordField: "Password",
            submitButton: "Login",
          },
        },
      },
      ua: {
        translation: {
          postInfoCard: {
            visit: "Відвідати Профіль",
          },
          loginPage: {
            heading: "Увійдіть",
            subheading:
              "Увійдіть до свого облікового запису, ввівши Ваш eMail та пароль.",
            emailField: "Ел. пошта",
            passwordField: "Пароль",
            submitButton: "Увійти",
          },
        },
      },
      ar: {
        translation: {
          postInfoCard: {
            visit: "زيارة الملف الشخصي",
          },
          loginPage: {
            heading: "تسجيل الدخول",
            subheading:
              "قم بتسجيل الدخول إلى حسابك عن طريق إدخال بريدك الإلكتروني وكلمة المرور.",
            emailField: "بريد إلكتروني",
            passwordField: "كلمة المرور",
            submitButton: "تسجيل الدخول",
          },
        },
      },
    },
  });

export default i18n;
