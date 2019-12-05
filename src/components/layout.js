import React from "react"
import { StyledProvider } from "components-extra"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <StyledProvider>
      <Header />
      <main>{children}</main>
    </StyledProvider>
  )
}

export default Layout
