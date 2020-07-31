import React from "react"
import styled from "styled-components"
import { BackToTop, StyledProvider } from "components-extra"
import { Container } from "@material-ui/core"

import { TranslationsProvider } from "hooks"
import { theme } from "styles"

import Footer from "./Footer"
import Header from "./Header"

const StyledContainer = styled(Container)`
  padding-bottom: 128px;
  background-color: aliceblue;
`

const Layout = ({ children }) => {
  return (
    <StyledProvider theme={theme}>
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
