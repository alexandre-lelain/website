import React from "react"
import { useTranslation } from "react-i18next"
import { Timeline } from "@material-ui/lab"
import { useMediaQuery } from "@material-ui/core"
import { map } from "lodash"

import Section from "./Section"
import Title from "./Title"
import ExperienceItem from "./ExperienceItem"

const Experiences = () => {
  const { t } = useTranslation("experiences")
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"))
  const experiences = t("items")

  return (
    <Section id="experiences">
      <Title>{t("title")}</Title>
      <Timeline align={isSmallScreen ? "left" : "alternate"}>
        {map(experiences, (_, name) => (
          <ExperienceItem key={name} name={name} />
        ))}
      </Timeline>
    </Section>
  )
}

export default Experiences
