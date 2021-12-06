import React, { Fragment, useCallback } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Paragraph } from "components-extra"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { StaticImage } from "gatsby-plugin-image"
import { last, map } from "lodash"
import { Trans, useTranslation } from "react-i18next"

import Tags from "../Tags"

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", //16:9
  },
  content: {
    textAlign: "left",
    flexGrow: 1,
  },
  button: {
    color: theme.palette.links,
  },
}))

const StyledImg = styled(StaticImage)`
  ${({ theme: { palette } }) => `
    border-bottom: 1px solid ${palette.secondary.main};
  `};
`

const StyledCard = styled(Card)`
  display: flex;
  flex-grow: 1;
  min-width: 200px;
  max-width: 500px;
  flex-direction: column;
  margin: 48px 24px;

  ${({ theme: { breakpoints } }) => `
    ${breakpoints.down("md")} {
      max-width: 400px;
    }
  `};
`

const Title = styled(Paragraph)`
  font-weight: bold;
  margin-bottom: 16px;
`

const StyledTags = styled(Tags)`
  margin-top: 0px;
  text-align: left;
`

const ComplexDescription = ({ descriptions = [] }) => {
  const lastElement = last(descriptions)
  return (
    <Fragment>
      {map(descriptions, (description, index) => (
        <Paragraph
          paragraph={description !== lastElement}
          key={index}
          color="textSecondary"
        >
          <Trans>{description}</Trans>
        </Paragraph>
      ))}
    </Fragment>
  )
}

const BaseProject = ({ image = {}, prefix, ...rest }) => {
  const { t: i18nt } = useTranslation("projects")
  const t = useCallback((key) => i18nt(`${prefix}.${key}`), [i18nt, prefix])
  const classes = useStyles()

  const { src } = image
  const control = t("controls")
  const controls = Array.isArray(control) ? control : []
  const description = t("description")
  const descriptions = Array.isArray(description) ? description : [description]

  return (
    <StyledCard component="section" {...rest}>
      <CardMedia
        className={classes.media}
        component={StyledImg}
        src={src}
        placeholder="blurred"
        layout="constrained"
        width={500}
        height={500}
      />
      <CardContent className={classes.content}>
        <Title variant="h5" component="h3">
          {t("title")}
        </Title>
        <StyledTags tags={t("tags")} />
        <ComplexDescription descriptions={descriptions} />
      </CardContent>
      <CardActions>
        {map(controls, (control) => {
          const { label, link } = control
          return (
            <Button
              key={label}
              className={classes.button}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {label}
            </Button>
          )
        })}
      </CardActions>
    </StyledCard>
  )
}

ComplexDescription.propTypes = {
  descriptions: PropTypes.array,
}

BaseProject.propTypes = {
  image: PropTypes.object,
  prefix: PropTypes.string.isRequired,
}

export default BaseProject
