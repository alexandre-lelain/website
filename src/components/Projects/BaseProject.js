import React from "react"
import PropTypes from "prop-types"
import { Card } from "components-extra"
import Img from "gatsby-image"
import { get, map } from "lodash"

import { useTranslations } from "hooks"

const BaseProject = ({ image = {}, prefix = "", ...rest }) => {
  const { t, wordings } = useTranslations(prefix)
  const { src, fluid } = image
  const controls = get(wordings, prefix + ".controls", [])

  return (
    <Card
      big
      component="section"
      description={t("description")}
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

BaseProject.propTypes = {
  image: PropTypes.object,
  prefix: PropTypes.string,
}

export default BaseProject
