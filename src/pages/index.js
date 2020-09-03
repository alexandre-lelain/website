import React from "react"

import Landing from "components/Landing"
import Projects from "components/Projects"
import About from "components/About"
import SEO from "components/Seo"

const IndexPage = () => (
  <>
    <SEO />
    <Landing />
    <About />
    <Projects />
  </>
)

export default IndexPage
