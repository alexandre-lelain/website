import React from "react"
import { BackToTop, StyledProvider } from "components-extra"

import { initializeTranslations } from "utils"
import { theme } from "styles"

import Footer from "./Footer"
import Header from "./Header"

initializeTranslations()

const Layout = ({ children }) => {
  return (
    <StyledProvider theme={theme}>
      <div>
        <Header />
        <main>{children}</main>
        <BackToTop />
        <Footer />
      </div>
    </StyledProvider>
  )
}

export default Layout
