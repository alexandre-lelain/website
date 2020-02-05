import React from "react"

import Landing from "components/Landing"
import Layout from "components/Layout"
import Projects from "components/Projects"
import SEO from "components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Landing />
    <Projects />
  </Layout>
)

export default IndexPage
