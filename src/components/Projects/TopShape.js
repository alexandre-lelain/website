import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/top_shape.webp"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "top_shape.webp" }) {
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
      id="top-shape"
      image={{ src: Media, fluid }}
      prefix="projects.topShape"
    />
  )
}
