import React from "react"

import About from "components/About"
import Experiences from "components/Experiences"
import Landing from "components/Landing"
import Projects from "components/Projects"
import SEO from "components/Seo"

const IndexPage = () => (
  <>
    <SEO />
    <Landing />
    <About />
    <Experiences />
    <Projects />
  </>
)

export default IndexPage
