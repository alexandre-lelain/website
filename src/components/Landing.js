import React from "react"
import styled from "styled-components"
import { IconButton, Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

import { Mail, Github, Twitter, LinkedIn } from "icons"

import Profile from "./Profile"
import Separator from "./Separator"
import Section from "./Section"

const query = graphql`
  query {
    site {
      siteMetadata {
        github
        linkedIn
        twitter
        mail
      }
    }
  }
`

const Container = styled(Section)`
  min-height: 100vh;
  ${({
    theme: {
      palette: { text },
    },
  }) => `
    color: ${text.primary};
  `}
`

const Title = styled(Typography)`
  font-size: calc(16px + 2vh + 1vw);
  font-weight: bold;
  margin: 8px 0px;
`

const Subtitle = styled(Typography)`
  font-size: calc(12px + 1vh + 0.5vw);
  font-weight: bold;
  margin-bottom: 16px;
`

const Caption = styled(Typography)`
  font-size: calc(12px + 0.5vh + 0.25vw);
  max-width: 800px;
  margin: 8px 0px;
`

const IconsContainer = styled.div`
  display: flex;
  margin-top: 8px;
  ${({ theme: { breakpoints } }) => `
    margin-bottom: 64px;
    ${breakpoints.down("md")} {
      margin-bottom: 24px;
    }
  `}
`

const IconItem = ({ title, children, ...rest }) => (
  <IconButton
    aria-label={title}
    color="primary"
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    {children}
  </IconButton>
)

const Landing = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  const { t } = useTranslation("landing")

  return (
    <Container id="landing" maxWidth={false}>
      <Profile />
      <Title component="h1">{t("title")}</Title>
      <Subtitle component="h2">{t("subtitle")}</Subtitle>
      <Separator />
      <IconsContainer>
        <IconItem title="Github" href={siteMetadata.github}>
          <Github />
        </IconItem>
        <IconItem title="Twitter" href={siteMetadata.twitter}>
          <Twitter />
        </IconItem>
        <IconItem title="LinkedIn" href={siteMetadata.linkedIn}>
          <LinkedIn />
        </IconItem>
        <IconItem title="Mail" href={siteMetadata.mail}>
          <Mail />
        </IconItem>
      </IconsContainer>
      <Caption>{t("caption1")}</Caption>
      <Caption>{t("caption2")}</Caption>
    </Container>
  )
}

IconItem.propTypes = {
  title: PropTypes.string,
}

export default Landing
