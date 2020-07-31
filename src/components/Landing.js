import React from "react"
import styled from "styled-components"
import { Paragraph } from "components-extra"
import { Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { useTranslations } from "hooks"

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "profile.webp" }) {
      childImageSharp {
        fixed(webpQuality: 100, width: 156) {
          ...GatsbyImageSharpFixed
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

const Title = styled(Typography).attrs(() => ({
  color: "primary",
  variant: "h1",
}))`
  margin-top: calc(10vh + 4vw);
  font-size: calc(9vh + 1vw);
  margin-bottom: 32px;
`
const Description = styled(Paragraph).attrs(() => ({
  color: "primary",
  variant: "h4",
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
  const { fixed } = placeholderImage.childImageSharp

  return (
    <Container>
      <Title>{t("landing.title")}</Title>
      <Image alt="That's me!" fixed={fixed} />
      <Description>{t("landing.description")}</Description>
      <Separator />
    </Container>
  )
}
