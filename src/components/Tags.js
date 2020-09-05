import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { map } from "lodash"
import { Chip } from "@material-ui/core"

const TagsContainer = styled.ul`
  padding: 0px;
  text-align: center;
  li {
    margin-top: 8px;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

const Tags = ({ tags = [], ...rest }) => {
  return Array.isArray(tags) ? (
    <TagsContainer {...rest}>
      {map(tags, (tag) => (
        <Chip size="small" component="li" key={tag} label={tag} />
      ))}
    </TagsContainer>
  ) : null
}

Tags.propTypes = {
  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

export default styled(Tags)``
