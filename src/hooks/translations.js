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
    <TranslationsContext.Provider value={{ changeLocale, t }}>
      {children}
    </TranslationsContext.Provider>
  )
}

const useTranslations = () => useContext(TranslationsContext)

export { TranslationsProvider, useTranslations }
