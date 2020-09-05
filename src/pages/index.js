import React from "react"

import About from "components/About"
import Experiences from "components/Experiences"
import Landing from "components/Landing"
import Projects from "components/Projects"
import SEO from "components/Seo"
import Skills from "components/Skills"

const IndexPage = () => (
  <>
    <SEO />
    <Landing />
    <About />
    <Experiences />
    <Projects />
    <Skills />
  </>
)

export default IndexPage
