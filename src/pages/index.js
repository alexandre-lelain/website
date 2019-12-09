import React from "react"

import Landing from "components/Landing"
import Layout from "components/Layout"
import Projects from "components/Projects"
import SEO from "components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={["Alexandre Le Lain", "Portfolio", "Projects"]}
    />
    <Landing />
    <Projects />
  </Layout>
)

export default IndexPage
