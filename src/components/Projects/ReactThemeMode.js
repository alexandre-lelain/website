import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/react_theme_mode.webp"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "react_theme_mode.webp" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  const { fluid } = placeholderImage.childImageSharp

  return (
    <BaseProject
      id="react-theme-mode"
      image={{ src: Media, fluid }}
      prefix="projects.reactThemeMode"
    />
  )
}
