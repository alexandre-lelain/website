import React from "react"
import { useTranslation } from "react-i18next"
import { Timeline } from "@material-ui/lab"
import { useMediaQuery, makeStyles } from "@material-ui/core"
import { map } from "lodash"

import Section from "./Section"
import Title from "./Title"
import ExperienceItem from "./ExperienceItem"

const useStyles = makeStyles(() => ({
  timeline: {
    paddingRight: 0,
    paddingLeft: 0,
  },
}))

const Experiences = () => {
  const { t } = useTranslation("experiences")
  const classes = useStyles()
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"))
  const experiences = t("items")

  return (
    <Section id="experiences">
      <Title>{t("title")}</Title>
      <Timeline
        classes={{ root: classes.timeline }}
        align={isSmallScreen ? "left" : "alternate"}
      >
        {map(experiences, (_, name) => (
          <ExperienceItem key={name} name={name} />
        ))}
      </Timeline>
    </Section>
  )
}

export default Experiences
