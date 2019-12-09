import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/avec_vous_demain.png"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avec_vous_demain.png" }) {
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
    <BaseProject
      image={{ src: Media, fluid }}
      prefix="projects.avecVousDemain"
    />
  )
}
