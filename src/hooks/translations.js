import React, { createContext, useCallback, useContext, useState } from "react"
import { get } from "lodash"

const DEFAULT_LOCALE = "en"

const loadTranslationForLocale = (locale = DEFAULT_LOCALE) =>
  require(`../translations/${locale}`)

const TranslationsContext = createContext({})
const TranslationsProvider = ({ children }) => {
  const [wordings, setWordings] = useState(loadTranslationForLocale())

  const trans = useCallback(key => get(wordings, key, ""), [wordings])
  const changeLocale = locale => {
    setWordings(loadTranslationForLocale(locale))
  }

  return (
    <TranslationsContext.Provider value={{ changeLocale, trans }}>
      {children}
    </TranslationsContext.Provider>
  )
}

const useTranslations = () => useContext(TranslationsContext)

export { TranslationsProvider, useTranslations }
