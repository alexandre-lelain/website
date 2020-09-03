import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Media from "images/avec_vous_demain.webp"

import BaseProject from "./BaseProject"

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avec_vous_demain.webp" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1800) {
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
      id="avec-vous-demain"
      image={{ src: Media, fluid }}
      prefix="avecVousDemain"
    />
  )
}
