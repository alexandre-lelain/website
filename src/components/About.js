import React from "react"
import styled from "styled-components"
import { Paragraph } from "components-extra"
import { Trans, useTranslation } from "react-i18next"

import Section from "./Section"
import Title from "./Title"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`

const Part = styled.div`
  margin-bottom: 32px;
`

const About = () => {
  const { t } = useTranslation("about")

  return (
    <Section id="about">
      <Container>
        <Part>
          <Title color="secondary">{t("left.title")}</Title>
          <Paragraph color="secondary">
            <Trans>{t("left.part1")}</Trans>
          </Paragraph>
        </Part>
        <Part>
          <Title color="secondary">{t("right.title")}</Title>
          <Paragraph>Totocap</Paragraph>
        </Part>
      </Container>
    </Section>
  )
}

export default About
