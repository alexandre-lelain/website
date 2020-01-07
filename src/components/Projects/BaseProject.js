import React, { Fragment } from "react"
import { Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import { Card } from "components-extra"
import Img from "gatsby-image"
import { last, get, map } from "lodash"

import { useTranslations } from "hooks"

const ComplexDescription = ({ descriptions = [] }) => {
  const lastElement = last(descriptions)
  return (
    <Fragment>
      {map(descriptions, (description, index) => (
        <Typography paragraph={description !== lastElement} key={index}>
          {description}
        </Typography>
      ))}
    </Fragment>
  )
}

const BaseProject = ({ image = {}, prefix = "", ...rest }) => {
  const { t, wordings } = useTranslations(prefix)
  const { src, fluid } = image
  const controls = get(wordings, prefix + ".controls", [])

  const description = t("description")
  const descriptions = Array.isArray(description) ? description : [description]

  return (
    <Card
      big
      component="section"
      description={<ComplexDescription descriptions={descriptions} />}
      image={{ component: Img, fluid, src }}
      title={t("title")}
      {...rest}
    >
      {map(controls, control => {
        const { label, link } = control
        return (
          <Card.Button
            key={label}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {label}
          </Card.Button>
        )
      })}
    </Card>
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
