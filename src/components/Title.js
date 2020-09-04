import React from "react"
import styled from "styled-components"
import { Typography } from "@material-ui/core"

import Separator from "./Separator"

const Container = styled.div`
  margin-bottom: 48px;
  margin-top: 32px;
`

const StyledTitle = styled(Typography)`
  text-align: center;
  font-size: calc(16px + 2vh + 1vw);
  margin-bottom: 4px;
  font-weight: bold;
`

const Title = (props) => {
  return (
    <Container>
      <StyledTitle color="textPrimary" component="h2" variant="h3" {...props} />
      <Separator />
    </Container>
  )
}

export default styled(Title)``
