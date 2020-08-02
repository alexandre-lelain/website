import React, { useMemo } from "react"
import styled from "styled-components"
import { BackToTop, StyledProvider } from "components-extra"
import { Container } from "@material-ui/core"

import { TranslationsProvider, ThemeModeProvider, useIsDark } from "hooks"
import { lightTheme, darkTheme } from "styles"

import Footer from "./Footer"
import Header from "./Header"

const StyledContainer = styled(Container)`
  padding-bottom: 128px;
  ${({ theme: { palette } }) => `
    background-color: ${palette.backgrounds.page};
  `}
`

const Layout = (props) => {
  return (
    <ThemeModeProvider>
      <LayoutContent {...props} />
    </ThemeModeProvider>
  )
}

const LayoutContent = ({ children }) => {
  const isDark = useIsDark()
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark])

  return (
    <StyledProvider theme={theme} dark={isDark}>
      <TranslationsProvider>
        <>
          <Header />
          <StyledContainer maxWidth={false}>
            <main>{children}</main>
          </StyledContainer>
          <BackToTop />
          <Footer />
        </>
      </TranslationsProvider>
    </StyledProvider>
  )
}

export default Layout
