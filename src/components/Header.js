import React, { useState } from "react"
import styled from "styled-components"
import { Navbar } from "components-extra"
import { makeStyles } from "@material-ui/core/styles"

import Book from "icons/Book"
import Dark from "icons/Dark"
import Light from "icons/Light"

import { useTranslations, useThemeMode, useIsDark } from "hooks"

const useStyles = makeStyles({
  icon: {
    marginRight: 8,
  },
})

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
  const { changeLocale, locale, t } = useTranslations("header")
  const [selectedLocale, setLocale] = useState(locale)
  const [, setMode] = useThemeMode()
  const isDark = useIsDark()
  const classes = useStyles()

  const iconProps = {
    className: classes.icon,
    "aria-label": t("menu.toggleMode"),
  }

  const onChangeLanguage = (locale) => {
    setLocale(locale)
    changeLocale && changeLocale(locale)
  }

  const onChangeMode = () => {
    setMode(isDark ? "light" : "dark")
  }

  return (
    <Navbar position="relative">
      <StyledBrand title={t("title")}>
        <Book />
      </StyledBrand>
      <Navbar.Language selectedLanguage={t(`${selectedLocale}`)}>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("en")}>
          {t("en")}
        </Navbar.LanguageItem>
        <Navbar.LanguageItem onClick={() => onChangeLanguage("fr")}>
          {t("fr")}
        </Navbar.LanguageItem>
      </Navbar.Language>
      <StyledMenu label="navigation-menu">
        <Navbar.MenuItem onClick={onChangeMode}>
          {isDark ? <Dark {...iconProps} /> : <Light {...iconProps} />}
          {t("menu.theme")}
        </Navbar.MenuItem>
        <Navbar.MenuItem href="#contact">{t("menu.contact")}</Navbar.MenuItem>
      </StyledMenu>
    </Navbar>
  )
}
export default Header
