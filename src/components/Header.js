import React from "react"
import styled from "styled-components"
import { Navbar } from "components-extra"
import { useTranslation } from "react-i18next"

import { getPreferedLocale, setPreferedLocale } from "utils"
import Book from "icons/Book"

const StyledMenu = styled(Navbar.Menu)`
  margin-left: 12px;
  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.values.md}px) {
      margin-left: 0px;
    }
  `};
`

const StyledBrand = styled(Navbar.Brand)`
  word-break: break-all;
`

const Header = () => {
  const { t, i18n } = useTranslation("header")
  const selectedLanguage = i18n.language || getPreferedLocale()

  const onChangeLanguage = (locale) => {
    i18n.changeLanguage(locale)
    setPreferedLocale(locale)
  }

  return (
    <Navbar position="sticky">
      <StyledBrand title={t("title")}>
        <Book />
      </StyledBrand>
      <Navbar.Language selectedLanguage={t(selectedLanguage)}>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("en")}>
          {t("en")}
        </Navbar.LanguageItem>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("fr")}>
          {t("fr")}
        </Navbar.LanguageItem>
      </Navbar.Language>
      <StyledMenu label="navigation-menu">
        <Navbar.MenuItem href="#about">{t("menu.about")}</Navbar.MenuItem>
        <Navbar.MenuItem href="#experiences">
          {t("menu.experiences")}
        </Navbar.MenuItem>
        <Navbar.MenuItem href="#projects">{t("menu.projects")}</Navbar.MenuItem>
        <Navbar.MenuItem href="#skills">{t("menu.skills")}</Navbar.MenuItem>
        <Navbar.MenuItem href="#contact">{t("menu.contact")}</Navbar.MenuItem>
      </StyledMenu>
    </Navbar>
  )
}
export default Header
