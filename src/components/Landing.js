import React from "react"
import styled from "styled-components"
import { Paragraph } from "components-extra"
import { Typography } from "@material-ui/core"

import { useTranslations } from "hooks"

const Container = styled.div`
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled(Typography).attrs(() => ({
  color: "secondary",
  variant: "h1",
}))`
  margin-top: calc(10vh + 4vw);
  font-size: calc(9vh + 1vw);
`
const Description = styled(Paragraph).attrs(() => ({
  color: "secondary",
  variant: "h4",
}))`
  margin: 48px 0px;
`

const Separator = styled.hr`
  width: 60%;
  margin: 24px 0px 0px 0px;
`

export default () => {
  const { t } = useTranslations()

  return (
    <Container>
      <Title>{t("landing.title")}</Title>
      <Description>{t("landing.description")}</Description>
      <Separator />
    </Container>
  )
}
