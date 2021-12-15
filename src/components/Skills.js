import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useTranslation, Trans } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { filter, reduce } from "lodash"
import { Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import Section from "./Section"
import Skill from "./Skill"
import Title from "./Title"

const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          gatsbyImageData
          parent {
            ... on File {
              name
            }
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

const useLogos = () => {
  const {
    allImageSharp: { edges },
  } = useStaticQuery(query)

  const filteredEdges = filter(edges, ({ node: { parent } }) => {
    return logos.includes(parent.name)
  })

  return reduce(
    filteredEdges,
    (filteredLogos, { node: { gatsbyImageData, parent } }) => {
      const name = parent.name
      return {
        [name]: gatsbyImageData,
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
    <GatsbyImage
      aria-hidden="true"
      layout="constrained"
      width={156}
      height={156}
      placeholder="blurred"
      style={{ width: 42 }}
      {...rest}
    />
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
          <SkillItem alt="react" image={react} label="React.js" />
          <SkillItem alt="JavaScript" image={js} label="JavaScript" />
        </Skill>
        <Skill title={proficient.title} subtitle={proficient.subtitle}>
          <SkillItem alt="TypeScript" image={typescript} label="TypeScript" />
          <SkillItem
            alt="StyledComponents"
            image={styledcomponents}
            label="Styled-Components"
          />
          <SkillItem
            alt="ReactNative"
            image={reactnative}
            label="ReactNative.js"
          />
          <SkillItem alt="Webpack" image={webpack} label="Webpack" />
          <SkillItem alt="jest" image={jest} label="Jest & RTL" />
          <SkillItem alt="babel" image={babel} label="Babel" />
          <SkillItem alt="Storybook" image={storybook} label="Storybook" />
          <SkillItem alt="HTML&CSS" image={html} label="HTML & CSS" />
          <SkillItem alt="Gatsby" image={gatsby} label="Gatsby" />
          <SkillItem alt="TDD" image={tdd} label="TDD" />
          <SkillItem alt="CI" image={ci} label="CI" />
          <SkillItem alt="Cypress" image={cypress} label="Cypress" />
          <SkillItem alt="mfe" image={mfe} label="Micro-FrontEnds" />
          <SkillItem alt="Nodejs" image={nodejs} label="Node.js" />
          <SkillItem alt="Api" image={api} label="APIs" />
        </Skill>
        <Skill title={basics.title} subtitle={basics.subtitle}>
          <SkillItem alt="php" image={php} label="PHP" />
          <SkillItem alt="python" image={python} label="Python" />
          <SkillItem alt="java" image={java} label="Java" />
          <SkillItem alt="ZF" image={zend} label="ZF" />
          <SkillItem alt="Symfony" image={symfony} label="Symfony" />
          <SkillItem alt="AWS" image={aws} label="AWS" />
          <SkillItem alt="sql&nosql" image={sql} label="SQL & noSQL" />
          <SkillItem alt="nginx" image={nginx} label="Nginx" />
          <SkillItem alt="Linux" image={linux} label="Linux" />
        </Skill>
        <Skill title={others.title} subtitle={others.subtitle}>
          <SkillItem alt="fr" image={fr} label={t("others.fr")} />
          <SkillItem alt="en" image={en} label={t("others.en")} />
          <SkillItem alt="es" image={es} label={t("others.es")} />
          <SkillItem alt="pm" image={pm} label={t("others.pm")} />
        </Skill>
      </SkillsContainer>
    </Section>
  )
}

SkillItem.propTypes = {
  label: PropTypes.string,
}

export default Skills
