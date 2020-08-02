import React from "react"
import styled from "styled-components"
import { Paragraph } from "components-extra"
import { Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { useTranslations } from "hooks"

const StyledImage = styled(Image)`
  width: 156px;
  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.values.md}px) {
      width: 108px;
    }
  `};
`

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

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;
  text-align: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled(Typography).attrs(({ theme: { palette } }) => ({
  color: palette.type === "dark" ? "textPrimary" : "primary",
  variant: "h1",
  component: "h1",
}))`
  margin-top: calc(10vh + 4vw);
  font-size: calc(32px + 4vh + 1vw);
  margin-bottom: 32px;
`
const Description = styled(Paragraph).attrs(({ theme: { palette } }) => ({
  color: palette.type === "dark" ? "textPrimary" : "primary",
  variant: "h4",
  component: "h2",
}))`
  margin: 48px 0px;
`

const Separator = styled.hr`
  width: 60%;
  margin: 24px 0px 0px 0px;
`

export default () => {
  const { placeholderImage } = useStaticQuery(query)
  const { t } = useTranslations()
  const { fluid } = placeholderImage.childImageSharp

  return (
    <Container>
      <Title>{t("landing.title")}</Title>
      <StyledImage alt="That's me!" fluid={fluid} />
      <Description>{t("landing.description")}</Description>
      <Separator />
    </Container>
  )
}
