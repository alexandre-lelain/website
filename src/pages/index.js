import React from "react"

import Landing from "components/Landing"
import Layout from "components/Layout"
import SEO from "components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
  </Layout>
)

export default IndexPage
