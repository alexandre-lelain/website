import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const DEFAULT_LOCALE = "en"

import { en, fr } from "locales"

export const initializeTranslations = () => {
  i18n.use(initReactI18next).init({
    lng: getPreferedLocale(),
    resources: {
      en,
      fr,
    },
    fallbackLng: DEFAULT_LOCALE,
    returnObjects: true,
    keySeparation: ".",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })
}

export const setPreferedLocale = (locale = DEFAULT_LOCALE) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("locale", locale)
  }
}

export const getPreferedLocale = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("locale") || DEFAULT_LOCALE
  }
  return DEFAULT_LOCALE
}
