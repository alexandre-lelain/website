import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/components-extra.webp"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "components-extra.webp" }) {
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
      id="components-extra"
      image={{ src: Media, fluid }}
      prefix="projects.componentsExtra"
    />
  )
}
