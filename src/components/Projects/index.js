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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
