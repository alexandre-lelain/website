import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "profile.webp" }) {
      childImageSharp {
        fluid(webpQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const StyledImage = styled(Image)`
  margin-top: calc(6vh + 2vw);
  width: 156px;
  border: 2px white solid;
  border-radius: 50%;
  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.values.md}px) {
      width: 108px;
    }
  `};
`

const Profile = () => {
  const { placeholderImage } = useStaticQuery(query)
  const { fluid } = placeholderImage.childImageSharp

  return <StyledImage alt="That's me!" fluid={fluid} />
}

export default Profile
