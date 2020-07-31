import React from "react"
import styled from "styled-components"
import { BackToTop, StyledProvider } from "components-extra"
import { CardMedia, Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { TranslationsProvider } from "hooks"
import { theme } from "styles"
import background from "images/background.webp"

import Footer from "./Footer"
import Header from "./Header"

const StyledContainer = styled(Container)`
  padding-bottom: 128px;
  background-color: aliceblue;
`

const Layout = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.webp" }) {
          childImageSharp {
            fluid(webpQuality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const { fluid } = placeholderImage.childImageSharp

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
