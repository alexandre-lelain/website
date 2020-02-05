import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SEO from "../components/Seo"

const PageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const ContentContainer = styled("div")`
  text-align: center;
`

const NotFoundPage = () => (
  <PageContainer>
    <ContentContainer>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Back to main page</Link>
    </ContentContainer>
  </PageContainer>
)

export default NotFoundPage
