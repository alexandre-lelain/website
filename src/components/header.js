import React, { useState } from "react"
import { Navbar } from "components-extra"

import Book from "icons/Book"
import { useTranslations } from "hooks"

const Header = () => {
  const { changeLocale, locale, t } = useTranslations()
  const [selectedLocale, setLocale] = useState(locale)

  const onChangeLanguage = locale => {
    setLocale(locale)
    changeLocale && changeLocale(locale)
  }

  return (
    <Navbar>
      <Navbar.Brand title={t("header.title")}>
        <Book />
      </Navbar.Brand>
      <Navbar.Language selectedLanguage={t(`header.${selectedLocale}`)}>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("en")}>
          {t("header.en")}
        </Navbar.LanguageItem>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("fr")}>
          {t("header.fr")}
        </Navbar.LanguageItem>
      </Navbar.Language>
    </Navbar>
  )
}
export default Header
