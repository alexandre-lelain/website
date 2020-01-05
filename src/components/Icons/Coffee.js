import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  border-radius: 50%;
  margin-bottom: 64px;
`

export default () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "coffee.webp" }) {
          childImageSharp {
            fixed(quality: 100, width: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  const { fixed } = placeholderImage.childImageSharp

  return <StyledImage fixed={fixed} />
}
