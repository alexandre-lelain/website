import React from "react"
import styled from "styled-components"
import { Paragraph } from "components-extra"
import { Trans, useTranslation } from "react-i18next"
import { Button } from "@material-ui/core"

import { Cloud, Code, Download, Nature } from "icons"

import Section from "./Section"
import Title from "./Title"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme: { palette } }) => `
    ${Title} {
      color: ${palette.secondary.main};
    }
    ${Paragraph} {
      color: ${palette.secondary.dark};
    }
  `}
`

const Part = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  &:not(:last-child) {
    margin-bottom: 64px;
  }
  ${Paragraph} {
    margin-bottom: 48px;
  }
`

const PassionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  strong {
    margin-left: 8px;
    font-size: 1.2rem;
  }
  ${({ theme: { palette } }) => `
    color: ${palette.secondary.main};
  `}
`

const Profile = () => {
  const { t } = useTranslation("about")
  return (
    <Part>
      <Title>{t("left.title")}</Title>
      <Paragraph>
        <Trans>{t("left.part1")}</Trans>
      </Paragraph>
      <Paragraph>
        <Trans>{t("left.part2")}</Trans>
      </Paragraph>
      <Paragraph>
        <Trans>{t("left.resume")}</Trans>
      </Paragraph>
      <Button
        href={t("left.resumeLink")}
        startIcon={<Download />}
        target="_blank"
        rel="noreferrer noopener"
        color="primary"
        variant="contained"
        download
      >
        {t("left.resumeLabel")}
      </Button>
    </Part>
  )
}

const Passions = () => {
  const { t } = useTranslation("about")

  return (
    <Part>
      <Title>{t("right.title")}</Title>
      <Paragraph>
        <PassionItem>
          <Cloud />
          <Trans>{t("right.web.title")}</Trans>
        </PassionItem>
        <Trans>{t("right.web.content")}</Trans>
      </Paragraph>
      <Paragraph>
        <PassionItem>
          <Code />
          <Trans>{t("right.code.title")}</Trans>
        </PassionItem>
        <Trans>{t("right.code.content")}</Trans>
      </Paragraph>
      <Paragraph>
        <PassionItem>
          <Nature />
          <Trans>{t("right.nature.title")}</Trans>
        </PassionItem>
        <Trans>{t("right.nature.content")}</Trans>
      </Paragraph>
    </Part>
  )
}

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Profile />
        <Passions />
      </Container>
    </Section>
  )
}

export default About
