import React from "react"
import { StyledProvider } from "components-extra"

import { TranslationsProvider } from "hooks"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <StyledProvider>
      <TranslationsProvider>
        <Header />
        <main>{children}</main>
      </TranslationsProvider>
    </StyledProvider>
  )
}

export default Layout
