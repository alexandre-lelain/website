import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/wip.webp"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "wip.webp" }) {
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

  return <BaseProject image={{ src: Media, fluid }} prefix="projects.wip" />
}