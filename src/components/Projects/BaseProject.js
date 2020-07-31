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

const StyledCard = styled(Card)`
  position: relative;
  width: 30%;
  margin: 48px 0px;

  ${({ theme }) => `
    @media(max-width: ${theme.breakpoints.values.md}px) {
      width: 90%;
    }
  `};
`

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 8px;
`

const ComplexDescription = ({ descriptions = [] }) => {
  const lastElement = last(descriptions)
  return (
    <Fragment>
      {map(descriptions, (description, index) => (
        <Paragraph paragraph={description !== lastElement} key={index}>
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
    <StyledCard
      big
      component="section"
      description={<ComplexDescription descriptions={descriptions} />}
      image={{ component: StyledImg, fluid, src }}
      title={t("title")}
      {...rest}
    >
      {map(controls, (control) => {
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
