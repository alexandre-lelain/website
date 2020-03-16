import React, { Fragment } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Card, Paragraph } from "components-extra"
import Img from "gatsby-image"
import { last, get, map } from "lodash"

import { useTranslations } from "hooks"

const StyledImg = styled(Img)`
  ${({ theme: { palette } }) => `
    border-bottom: 1px solid ${palette.secondary.main};
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
          color="primary"
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
  const controls = get(wordings, prefix + ".controls", [])

  const description = t("description")
  const descriptions = Array.isArray(description) ? description : [description]

  return (
    <Card
      big
      component="section"
      description={<ComplexDescription descriptions={descriptions} />}
      image={{ component: StyledImg, fluid, src }}
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
