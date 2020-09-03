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
  margin: 4px auto;
  text-align: center;
`

const Projects = () => {
  const { t } = useTranslation("projects")

  return (
    <>
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
    </>
  )
}

export default Projects
