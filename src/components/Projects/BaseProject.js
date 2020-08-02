import React, { Fragment } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Paragraph } from "components-extra"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import { last, get, map } from "lodash"

import { useTranslations } from "hooks"

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

const StyledImg = styled(Img)`
  ${({ theme: { palette } }) => `
    border-bottom: 1px solid ${palette.secondary.main};
  `};
`

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 48px 0px;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.values.lg}px) {
      width: 40%;
    }
    @media(max-width: ${theme.breakpoints.values.md}px) {
      width: 90%;
    }
  `};
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
          {description}
        </Paragraph>
      ))}
    </Fragment>
  )
}

const BaseProject = ({ image = {}, prefix = "", ...rest }) => {
  const { t, wordings } = useTranslations(prefix)
  const { src, fluid } = image
  const classes = useStyles()
  const controls = get(wordings, prefix + ".controls", [])

  const description = t("description")
  const descriptions = Array.isArray(description) ? description : [description]

  return (
    <StyledCard component="section" {...rest}>
      <CardMedia
        className={classes.media}
        component={StyledImg}
        fluid={fluid}
        src={src}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h4" component="h3">
          {t("title")}
        </Typography>
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
  prefix: PropTypes.string,
}

export default BaseProject
