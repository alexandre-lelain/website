import React from "react"
import { BackToTop, StyledProvider } from "components-extra"

import { initializeTranslations } from "utils"
import { theme } from "styles"

import Header from "./Header"

initializeTranslations()

const Layout = ({ children }) => {
  return (
    <StyledProvider theme={theme}>
      <Header />
      {children}
      <BackToTop />
    </StyledProvider>
  )
}

export default Layout
