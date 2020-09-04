import React from "react"
import { useTranslation } from "react-i18next"
import { Timeline } from "@material-ui/lab"
import { map } from "lodash"

import Section from "./Section"
import Title from "./Title"
import ExperienceItem from "./ExperienceItem"

const Experiences = () => {
  const { t } = useTranslation("experiences")
  const experiences = t("items")

  return (
    <Section id="experiences">
      <Title>{t("title")}</Title>
      <Timeline align="alternate">
        {map(experiences, (_, name) => (
          <ExperienceItem key={name} name={name} />
        ))}
      </Timeline>
    </Section>
  )
}

export default Experiences
