import React, { useState } from "react"
import styled from "styled-components"
import { Navbar } from "components-extra"

import Book from "icons/Book"
import { useTranslations } from "hooks"

const StyledMenu = styled(Navbar.Menu)`
  margin-right: 24px;
  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.values.md}px) {
      margin-right: 12px;
    }
  `};
`

const Header = () => {
  const { changeLocale, locale, t } = useTranslations("header")
  const [selectedLocale, setLocale] = useState(locale)

  const onChangeLanguage = locale => {
    setLocale(locale)
    changeLocale && changeLocale(locale)
  }

  return (
    <Navbar>
      <Navbar.Brand title={t("title")}>
        <Book />
      </Navbar.Brand>
      <StyledMenu label="navigation-menu">
        <Navbar.MenuItem href="#my-website">{t("menu.cv")}</Navbar.MenuItem>
        <Navbar.MenuItem href="#components-extra">
          {t("menu.ce")}
        </Navbar.MenuItem>
        <Navbar.MenuItem href="#js-extra">{t("menu.je")}</Navbar.MenuItem>
        <Navbar.MenuItem href="#avec-vous-demain">
          {t("menu.avd")}
        </Navbar.MenuItem>
        <Navbar.MenuItem href="#top-shape">{t("menu.rest")}</Navbar.MenuItem>
        <Navbar.MenuItem href="#contact">{t("menu.contact")}</Navbar.MenuItem>
      </StyledMenu>
      <Navbar.Language selectedLanguage={t(`${selectedLocale}`)}>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("en")}>
          {t("en")}
        </Navbar.LanguageItem>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("fr")}>
          {t("fr")}
        </Navbar.LanguageItem>
      </Navbar.Language>
    </Navbar>
  )
}
export default Header
