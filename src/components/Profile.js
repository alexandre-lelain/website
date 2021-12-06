import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledImage = styled(StaticImage)`
  margin-top: calc(6vh + 2vw);
  width: 156px;
  border: 3px white solid;
  border-radius: 50%;
  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.values.md}px) {
      width: 108px;
    }
  `};
`

const Profile = () => {
  return (
    <StyledImage
      alt="Alexandre Le Lain"
      src="../images/profile.webp"
      layout="constrained"
      width={356}
      height={356}
      placeholder="blurred"
    />
  )
}

export default Profile
