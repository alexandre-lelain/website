import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { filter, reduce } from "lodash"
import { Typography } from "@material-ui/core"
import Img from "gatsby-image"

import Section from "./Section"
import Skill from "./Skill"
import Title from "./Title"

const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(webpQuality: 100) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const logos = [
  "react",
  "js",
  "ci",
  "typescript",
  "mfe",
  "cypress",
  "jest",
  "gatsby",
  "storybook",
  "tdd",
  "git",
  "html",
  "pm",
  "babel",
  "webpack",
  "reactnative",
  "nodejs",
  "php",
  "fr",
  "en",
  "es",
  "zend",
  "styledcomponents",
  "sqlite",
  "python",
  "nginx",
  "linux",
  "java",
  "aws",
  "django",
  "dynamodb",
]

const getName = (originalName) => originalName.match(/([a-z,-_]+)\./)[1]

const useLogos = () => {
  const {
    allImageSharp: { edges },
  } = useStaticQuery(query)

  const filteredEdges = filter(edges, ({ node: { fluid } }) => {
    const name = getName(fluid.originalName)
    return logos.includes(name)
  })

  return reduce(
    filteredEdges,
    (filteredLogos, { node: { fluid } }) => {
      const name = getName(fluid.originalName)
      return {
        [name]: fluid,
        ...filteredLogos,
      }
    },
    {}
  )
}

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledImg = styled(Img)`
  width: 42px;
`

const SkillItemContainer = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 70px;
  flex: 1 1 0px;
`

const Label = styled(Typography)``

const SkillItem = ({ label, ...rest }) => (
  <SkillItemContainer>
    <StyledImg {...rest} />
    <Label>{label}</Label>
  </SkillItemContainer>
)

const Skills = () => {
  const { t } = useTranslation("skills")
  const {
    react,
    js,
    ci,
    typescript,
    storybook,
    mfe,
    jest,
    cypress,
    gatsby,
    tdd,
    git,
    html,
    pm,
    babel,
    webpack,
    reactnative,
    nodejs,
    php,
    fr,
    en,
    es,
    zend,
    styledcomponents,
    sqlite,
    python,
    nginx,
    linux,
    java,
    aws,
    django,
    dynamodb,
  } = useLogos()
  const advanced = t("advanced")
  const proficient = t("proficient")
  const basics = t("basics")
  const others = t("others")

  return (
    <Section id="skills">
      <Title>{t("title")}</Title>
      <SkillsContainer>
        <Skill title={advanced.title} subtitle={advanced.subtitle}>
          <SkillItem alt="react" fluid={react} label="React.js" />
          <SkillItem alt="JavaScript" fluid={js} label="JavaScript" />
        </Skill>
        <Skill title={proficient.title} subtitle={proficient.subtitle}>
          <SkillItem alt="TypeScript" fluid={typescript} label="TypeScript" />
          <SkillItem
            alt="StyledComponents"
            fluid={styledcomponents}
            label="Styled-Components"
          />
          <SkillItem
            alt="ReactNative"
            fluid={reactnative}
            label="ReactNative.js"
          />
          <SkillItem alt="Webpack" fluid={webpack} label="Webpack" />
          <SkillItem alt="jest" fluid={jest} label="Jest & RTL" />
          <SkillItem alt="Storybook" fluid={storybook} label="Storybook" />
          <SkillItem alt="HTML&CSS" fluid={html} label="HTML & CSS" />
          <SkillItem alt="Gatsby" fluid={gatsby} label="Gatsby" />
          <SkillItem alt="TDD" fluid={tdd} label="TDD" />
          <SkillItem alt="CI" fluid={ci} label="CI" />
          <SkillItem alt="Cypress" fluid={cypress} label="Cypress" />
          <SkillItem alt="mfe" fluid={mfe} label="Micro-FrontEnds" />
          <SkillItem alt="Nodejs" fluid={nodejs} label="Node.js" />
          <SkillItem alt="Git" fluid={git} label="Git" />
        </Skill>
        <Skill title={basics.title} subtitle={basics.subtitle}>
          qsdqsd
        </Skill>
        <Skill title={others.title} subtitle={others.subtitle}>
          qsdqsd
        </Skill>
      </SkillsContainer>
    </Section>
  )
}

SkillItem.propTypes = {
  label: PropTypes.string,
}

export default Skills
