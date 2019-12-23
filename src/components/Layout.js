import React from "react"
import styled from "styled-components"
import { BackToTop, StyledProvider } from "components-extra"
import { CardMedia, Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { TranslationsProvider } from "hooks"
import background from "images/background.jpg"

import Footer from "./Footer"
import Header from "./Header"

const StyledContainer = styled(Container)`
  padding-bottom: 128px;
`

const Layout = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const { fluid } = placeholderImage.childImageSharp

  return (
    <StyledProvider>
      <TranslationsProvider>
        <>
          <Header />
          <CardMedia image={background}>
            <StyledContainer
              maxWidth={false}
              component={BackgroundImage}
              fluid={fluid}
            >
              <main>{children}</main>
            </StyledContainer>
          </CardMedia>
          <BackToTop />
          <Footer />
        </>
      </TranslationsProvider>
    </StyledProvider>
  )
}

export default Layout
