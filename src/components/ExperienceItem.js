import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  Fragment,
} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Trans, useTranslation } from "react-i18next"
import { Paragraph } from "components-extra"
import { Hidden as MuiHidden, Paper, Typography, Zoom } from "@material-ui/core"
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab"

import { Cloud, Location, School } from "icons"
import { isSSR } from "utils"

import Tags from "./Tags"

const ZOOM_ANIMATION_DELAY = 500

const getIcon = (type) => {
  switch (type) {
    case "web":
    default:
      return Cloud
    case "education":
      return School
  }
}

const Container = styled(Paper)`
  padding: 24px;
  margin-bottom: 64px;
  ${({ theme: { palette } }) => `
    border-top: 3px solid ${palette.primary.main};
  `}
`

const DateLabel = styled(Paragraph)`
  font-weight: bold;
`

const StyledDot = styled(TimelineDot)`
  padding: 12px;
  border: 3px solid white;
`

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 16px;
  font-weight: bold;
`

const Company = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`

const Description = styled.div`
  margin-bottom: 16px;
  margin-top: 8px;
  text-align: left;
`

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)`
  ${({ theme: { breakpoints } }) => `
    ${breakpoints.down("sm")} {
      display: none;
    }
  `}
`

const Hidden = (props) => <MuiHidden implementation="css" {...props} />

const Time = ({ t }) => (
  <Fragment>
    <DateLabel color="textSecondary">{t("date")}</DateLabel>
    <Paragraph color="textSecondary">{t("duration")}</Paragraph>
  </Fragment>
)

const ExperienceItem = ({ name }) => {
  const { t: i18nt } = useTranslation("experiences")
  const [display, setDisplay] = useState(false)
  const timelineItem = useRef()
  const t = useCallback((key) => i18nt(`items.${name}.${key}`), [i18nt])
  const type = t("type")
  const Icon = getIcon(type)

  useEffect(() => {
    const { current: item } = timelineItem
    const isInViewport = () => {
      if (item && !isSSR()) {
        const { offsetTop, offsetHeight } = item
        const windowPosY =
          window.pageYOffset + window.innerHeight / 2 + offsetHeight
        const isTimelineItemInViewport = windowPosY > offsetTop
        if (isTimelineItemInViewport) {
          setDisplay(true)
        }
      }
    }
    window.addEventListener("scroll", isInViewport)
    return () => window.removeEventListener("scroll", isInViewport)
  }, [timelineItem])

  return (
    <Zoom in={display} timeout={ZOOM_ANIMATION_DELAY}>
      <TimelineItem ref={timelineItem}>
        <StyledTimelineOppositeContent>
          <Hidden smDown>
            <Time t={t} />
          </Hidden>
        </StyledTimelineOppositeContent>
        <TimelineSeparator>
          <StyledDot color={type === "web" ? "primary" : "secondary"}>
            <Icon />
          </StyledDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Container elevation={3}>
            <Title variant="h5" component="h3">
              {t("title")}
            </Title>
            <Company color="primary">
              <Location />
              {t("company")}
            </Company>
            <Hidden mdUp>
              <Time t={t} />
            </Hidden>
            <Description>
              <Typography>
                <Trans>{t("description")}</Trans>
              </Typography>
            </Description>
            <Tags tags={t("tags")} />
          </Container>
        </TimelineContent>
      </TimelineItem>
    </Zoom>
  )
}

Time.propTypes = {
  t: PropTypes.func,
}

ExperienceItem.propTypes = {
  name: PropTypes.string,
}

export default ExperienceItem
