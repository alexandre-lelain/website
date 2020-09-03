import React from "react"
import styled from "styled-components"
import { Paragraph } from "components-extra"
import { useTranslation } from "react-i18next"

import ComponentsExtra from "./ComponentsExtra"
import JsExtra from "./JsExtra"
import AvecVousDemain from "./AvecVousDemain"
import TopShape from "./TopShape"
import AgentWeb from "./AgentWeb"
import More from "./More"
import NoCodeNoBug from "./NoCodeNoBug"
import ReactThemeMode from "./ReactThemeMode"

import Section from "../Section"
import Title from "../Title"

const Container = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Caption = styled(Paragraph).attrs(() => ({
  color: "primary",
  variant: "h4",
  component: "h2",
}))`
  margin-top: 16px;
  font-size: calc(12px + 1vh + 0.5vw);
  text-align: center;
`

const Projects = () => {
  const { t } = useTranslation("projects")

  return (
    <Section id="projects">
      <Title>{t("title")}</Title>
      <Caption>{t("caption")}</Caption>
      <Container>
        <NoCodeNoBug />
        <ComponentsExtra />
        <JsExtra />
        <ReactThemeMode />
        <AvecVousDemain />
        <TopShape />
        <AgentWeb />
        <More />
      </Container>
    </Section>
  )
}

export default Projects
