import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/cv.jpg"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "cv.jpg" }) {
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

  return <BaseProject image={{ src: Media, fluid }} prefix="projects.cv" />
}
