import React, { useCallback, Fragment } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Trans, useTranslation } from "react-i18next"
import { Paragraph } from "components-extra"
import { Chip, Hidden as MuiHidden, Paper, Typography } from "@material-ui/core"
import { map } from "lodash"
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab"

import { Cloud, Location, School } from "icons"

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

const TagsContainer = styled.ul`
  margin-top: 8px;
  padding: 0px;
  text-align: center;
  li {
    margin-top: 8px;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
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

const Tags = ({ tags = [] }) => {
  return (
    <TagsContainer>
      {map(tags, (tag) => (
        <Chip size="small" component="li" key={tag} label={tag} />
      ))}
    </TagsContainer>
  )
}

const Time = ({ t }) => (
  <Fragment>
    <DateLabel color="textSecondary">{t("date")}</DateLabel>
    <Paragraph color="textSecondary">{t("duration")}</Paragraph>
  </Fragment>
)

const ExperienceItem = ({ name }) => {
  const { t: i18nt } = useTranslation("experiences")
  const t = useCallback((key) => i18nt(`items.${name}.${key}`), [i18nt])
  const type = t("type")
  const Icon = getIcon(type)

  return (
    <TimelineItem>
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
          <Tags tags={Array.isArray(t("tags")) ? t("tags") : []} />
        </Container>
      </TimelineContent>
    </TimelineItem>
  )
}

Time.propTypes = {
  t: PropTypes.func,
}

Tags.propTypes = {
  tags: PropTypes.array,
}

ExperienceItem.propTypes = {
  name: PropTypes.string,
}

export default ExperienceItem
