import React, { createContext, useCallback, useContext, useState } from "react"
import { get } from "lodash"

const DEFAULT_LOCALE = "en"

const setPreferedLocale = (locale = DEFAULT_LOCALE) =>
  localStorage && localStorage.setItem("locale", locale)
const getPreferedLocale = () =>
  (localStorage && localStorage.getItem("locale")) || DEFAULT_LOCALE

const loadTranslationForLocale = (locale = DEFAULT_LOCALE) =>
  require(`../translations/${locale}`)

const TranslationsContext = createContext({})

const TranslationsProvider = ({ children }) => {
  const savedPreferedLocale = getPreferedLocale()
  const [wordings, setWordings] = useState(
    loadTranslationForLocale(savedPreferedLocale)
  )

  const t = useCallback(key => get(wordings, key, key), [wordings])
  const changeLocale = locale => {
    setWordings(loadTranslationForLocale(locale))
    setPreferedLocale(locale)
  }

  return (
    <TranslationsContext.Provider
      value={{ changeLocale, locale: savedPreferedLocale, t, wordings }}
    >
      {children}
    </TranslationsContext.Provider>
  )
}

const useTranslations = (prefix = "") => {
  const { t, ...rest } = useContext(TranslationsContext)
  const prefixedTrans = prefix ? key => t(`${prefix}.${key}`) : t
  return { t: prefixedTrans, ...rest }
}

export { TranslationsProvider, useTranslations }
