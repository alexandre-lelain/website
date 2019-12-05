import React from "react"
import { BackToTop, StyledProvider } from "components-extra"
import { CardMedia, Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { TranslationsProvider } from "hooks"
import background from "images/background.png"

import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background.png" }) {
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
            <Container
              maxWidth={false}
              component={BackgroundImage}
              fluid={fluid}
            >
              <main>{children}</main>
            </Container>
          </CardMedia>
          <BackToTop />
          <Footer />
        </>
      </TranslationsProvider>
    </StyledProvider>
  )
}

export default Layout
