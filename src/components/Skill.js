import React from "react"
import styled from "styled-components"
import { Paper, Typography } from "@material-ui/core"
import PropTypes from "prop-types"

const StyledPaper = styled(Paper)`
  margin: 48px 16px;
  max-width: 900px;
`

const SkillContent = styled.div`
  padding: 24px;
`

const Title = styled(Typography).attrs(() => ({
  color: "secondary",
  variant: "h5",
  component: "h3",
}))`
  font-weight: bold;
  padding: 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  ${({ theme: { palette } }) => `
    background-color: ${palette.primary.main};
  `}
`

const Subtitle = styled(Typography)`
  margin-bottom: 24px;
`

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Skill = ({ children, title, subtitle }) => {
  return (
    <StyledPaper elevation={3}>
      <Title>{title}</Title>
      <SkillContent>
        <Subtitle>{subtitle}</Subtitle>
        <ChildrenContainer>{children}</ChildrenContainer>
      </SkillContent>
    </StyledPaper>
  )
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Skill
