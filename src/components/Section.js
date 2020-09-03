import React from "react"
import styled from "styled-components"
import { Container } from "@material-ui/core"

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  word-break: break-word;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;
  padding-top: 48px;
  ${({
    id,
    theme: {
      palette: { backgrounds },
    },
  }) => `
    background-color: ${backgrounds[id]};
  `}
`

const Section = (props) => {
  return <StyledContainer component="section" maxWidth={false} {...props} />
}

export default styled(Section)``
