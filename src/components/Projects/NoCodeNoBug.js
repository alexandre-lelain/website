import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/nocode_nobug.webp"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nocode_nobug.webp" }) {
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
      id="nocode-nobug"
      image={{ src: Media, fluid }}
      prefix="projects.noCodeNoBug"
    />
  )
}
