import React, { useState } from "react"
import { Navbar } from "components-extra"

import Book from "icons/Book"
import { useTranslations } from "hooks"

const Header = () => {
  const { changeLocale, trans } = useTranslations()
  const [locale, setLocale] = useState("en")

  const onChangeLanguage = locale => {
    setLocale(locale)
    changeLocale && changeLocale(locale)
  }

  return (
    <Navbar>
      <Navbar.Brand title={trans("header.title")}>
        <Book />
      </Navbar.Brand>
      <Navbar.Language selectedLanguage={trans(`header.${locale}`)}>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("en")}>
          {trans("header.en")}
        </Navbar.LanguageItem>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("fr")}>
          {trans("header.fr")}
        </Navbar.LanguageItem>
      </Navbar.Language>
    </Navbar>
  )
}
export default Header
