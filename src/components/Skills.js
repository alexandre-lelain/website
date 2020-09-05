import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useTranslation, Trans } from "react-i18next"
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
  "api",
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
  "python",
  "nginx",
  "linux",
  "java",
  "aws",
  "sql",
  "symfony",
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
  flex-direction: column;
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
  min-width: 70px;
`

const Label = styled(Typography)``

const SkillItem = ({ label, ...rest }) => (
  <SkillItemContainer>
    <StyledImg aria-hidden="true" {...rest} />
    <Label>
      <Trans>{label}</Trans>
    </Label>
  </SkillItemContainer>
)

const Skills = () => {
  const { t } = useTranslation("skills")
  const {
    api,
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
    python,
    nginx,
    linux,
    java,
    aws,
    symfony,
    sql,
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
          <SkillItem alt="babel" fluid={babel} label="Babel" />
          <SkillItem alt="Storybook" fluid={storybook} label="Storybook" />
          <SkillItem alt="HTML&CSS" fluid={html} label="HTML & CSS" />
          <SkillItem alt="Gatsby" fluid={gatsby} label="Gatsby" />
          <SkillItem alt="TDD" fluid={tdd} label="TDD" />
          <SkillItem alt="CI" fluid={ci} label="CI" />
          <SkillItem alt="Cypress" fluid={cypress} label="Cypress" />
          <SkillItem alt="mfe" fluid={mfe} label="Micro-FrontEnds" />
          <SkillItem alt="Nodejs" fluid={nodejs} label="Node.js" />
          <SkillItem alt="Api" fluid={api} label="APIs" />
        </Skill>
        <Skill title={basics.title} subtitle={basics.subtitle}>
          <SkillItem alt="php" fluid={php} label="PHP" />
          <SkillItem alt="python" fluid={python} label="Python" />
          <SkillItem alt="java" fluid={java} label="Java" />
          <SkillItem alt="ZF" fluid={zend} label="ZF" />
          <SkillItem alt="Symfony" fluid={symfony} label="Symfony" />
          <SkillItem alt="AWS" fluid={aws} label="AWS" />
          <SkillItem alt="sql&nosql" fluid={sql} label="SQL & noSQL" />
          <SkillItem alt="nginx" fluid={nginx} label="Nginx" />
          <SkillItem alt="Linux" fluid={linux} label="Linux" />
        </Skill>
        <Skill title={others.title} subtitle={others.subtitle}>
          <SkillItem alt="fr" fluid={fr} label={t("others.fr")} />
          <SkillItem alt="en" fluid={en} label={t("others.en")} />
          <SkillItem alt="es" fluid={es} label={t("others.es")} />
          <SkillItem alt="pm" fluid={pm} label={t("others.pm")} />
        </Skill>
      </SkillsContainer>
    </Section>
  )
}

SkillItem.propTypes = {
  label: PropTypes.string,
}

export default Skills
