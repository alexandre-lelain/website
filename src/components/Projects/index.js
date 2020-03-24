import React from "react"
import styled from "styled-components"
import { Card } from "components-extra"

import MyWebsite from "./MyWebsite"
import ComponentsExtra from "./ComponentsExtra"
import JsExtra from "./JsExtra"
import AvecVousDemain from "./AvecVousDemain"
import TopShape from "./TopShape"
import AgentWeb from "./AgentWeb"
import More from "./More"
import NoCodeNoBug from "./NoCodeNoBug"

const Container = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Card} {
    width: 50%;
    margin: 48px 0px;

    ${({ theme }) => `
      @media(max-width: ${theme.breakpoints.values.md}px) {
        width: 90%;
      }
    `};
  }
`

export default () => (
  <Container>
    <MyWebsite />
    <NoCodeNoBug />
    <ComponentsExtra />
    <JsExtra />
    <AvecVousDemain />
    <TopShape />
    <AgentWeb />
    <More />
  </Container>
)
